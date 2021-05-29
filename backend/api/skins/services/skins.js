'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {

  async updateOrCreate(files = {}) {
    const { head_skin, upper_skin, lower_skin } = files;

    if (head_skin) {
      const uuid_head = this.getFilename(head_skin);

      const head_tx = await strapi.services.textures.findOrCreate(uuid_head, head_skin, 'head');

      let skin_o = this.findSkinByTexture(head_skin_tx.uuid, 'head');
      if(!skin_o) {
        skin_o = await strapi.query('skins').create({type: 'head'});
        skin_o.textures().attach(head_skin_tx.id);
      }

    }

    if (upper_skin) {
      const uuid_upper = this.getFilename(upper_skin);

      const upper_skin_tx = await strapi.query('textures').create({ type: 'upper', uuid: uuid_upper});

      await strapi.entityService.uploadFiles(upper_skin_tx, { file: upper_skin }, {
        model: 'textures',
      });
    }

    if (lower_skin) {
      const uuid_lower = this.getFilename(lower_skin);

      const lower_skin_tx = await strapi.query('textures').create({ type: 'lower', uuid: uuid_lower});

      await strapi.entityService.uploadFiles(lower_skin_tx, { file: lower_skin }, {
        model: 'textures',
      });
    }

    return true;

    //const entry = strapi.query('skins')
  },

  async findOrCreate(files) {

    const skin = await strapi.query('skins').fetch({
      withRelated: [{
        textures: function(qb) {
          qb.where()
        }
      }]
    })
  },


  getFilename(file) {
    return file.name.split('.').slice(0, -1).join('.');
  },

  async findSkinByTexture(uuid, type) {

    return await strapi.query('skins').model.query(qb => {
      qb.join('skins_textures__textures_skins', 'skins.id', 'skins_textures__textures_skins.skin_id');
      qb.join('textures', 'skins_textures__textures_skins.texture_id', 'textures.id');
      qb.where('textures.uuid', uuid);
      qb.where('skins.type', type);
    })
    .fetch();
  }

};
