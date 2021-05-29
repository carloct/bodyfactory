'use strict';
const path = require('path');
const tesseract = require('node-tesseract-ocr');
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
const { findOrCreate } = require('../../skins/services/skins');

const config = {
  lang: "eng",
  oem: 1,
  psm: 6,
  load_system_dawg : 0,
  load_freq_dawg : 0

}

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
   /**
   * Update a record.
   *
   * @return {Object}
   */

    async update(ctx) {
      const { id } = ctx.params;

      let entity;
      if (ctx.is('multipart')) {
        const { data, files } = parseMultipartData(ctx);


        entity = await strapi.services.styles.update({ id }, data, {
          files,
        });


        if(entity.items_list) {

          // const imgPath = path.join(__dirname, '../../..', `public/${entity.items_list.url}`);

          // try {
          //   const text = await tesseract.recognize(imgPath, config);

          //   const items = text.split(/\r?\n/);

          //   const compact = items.filter((x) => {
          //     if ( x.length > '8' && !x.includes('shape')) {
          //       return true;
          //     }

          //     return false;
          //   } );

          //   const clean = compact.map(x => {
          //     return x.substring(0, x.indexOf("worn on") - 1);
          //   })
          //   console.log(clean)

          // } catch (error) {
          //   console.log(error);
          // }

         // console.log(ocrData)

        }


      } else {
        entity = await strapi.services.styles.update({ id }, ctx.request.body);
      }

      return sanitizeEntity(entity, { model: strapi.models.styles });
    },
};
