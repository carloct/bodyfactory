const { isDraft } = require('strapi-utils').contentTypes;


/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {

  async update(params, data, { files } = {}) {
    const existingEntry = await strapi.query('styles').findOne(params);

    //console.log(files);

    const draft = isDraft(existingEntry, strapi.models.styles);

    const validData = await strapi.entityValidator.validateEntityUpdate(
      strapi.models.styles,
      data,
      { draft }
    );

    const entry = await strapi.query('styles').update(params, validData);

    if (files) {

      const skin = await strapi.services.skins.updateOrCreate(files);

      // automatically uploads the files based on the entry and the model
      await strapi.entityService.uploadFiles(entry, files, {
        model: 'styles',
        // if you are using a plugin's model you will have to add the `source` key (source: 'users-permissions')
      });
      return this.findOne({ id: entry.id });
    }

    return entry;
  }
};
