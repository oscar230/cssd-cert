const nodeIteratorUtil = require('NodeIteratorUtil');
const properties = require('Properties');
const propertyUtil = require('PropertyUtil');
const linkRenderer = require('LinkRenderer');
const imageRenderer = require('ImageRenderer');

let list = [];
let count = 0;

function getText(node, metadata, limit) {
   const text = propertyUtil.getString(node, metadata);
   return text.slice(0, parseInt(limit, 10));
   
}

nodeIteratorUtil.getMenuItems(scriptVariables.artikelarkiv).forEachRemaining(article => {
   if (count < scriptVariables.maxartiklar) {
      linkRenderer.update(article);
      imageRenderer.update(propertyUtil.getNode(article, 'SV.Image'));
      list.push({
         "title": linkRenderer.render(),
         "description": getText(article, 'SV.Description', 100),
         "content": getText(article, 'SV.Content', 300),
         "image": imageRenderer.render(),
      });
   	count += 1;
   }
});