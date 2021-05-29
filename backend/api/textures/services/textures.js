'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  async findOrCreateByUuid(uuid, file, type) {

    let tx = await strapi.query('textures').findOne({ type, uuid});
    if(!tx) {
      tx = await strapi.query('textures').create({ type, uuid});

      await strapi.entityService.uploadFiles(tx, { file: file }, {
        model: 'textures',
      });
    }

    return tx;
  }
};
