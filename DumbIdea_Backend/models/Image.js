const  mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const imageSchema = new Schema({
  imageUrl : {
    type    : String,
    require : true
  },
  posterId : {
    type : ObjectId
  }
},
{ collection: 'images' },
{ timestamps: {} });

const ImageModel = mongoose.model('images', imageSchema);

// Create image
const create = (imageInfo) => {
  return new Promise((resolve, reject) => {
      ImageModel.create(imageInfo).then(
        image => {
          resolve(image);
        },
        err => {
          reject(err);
        }
      )
  });
}

// Get image with target
// Ex: GetImageWithTarget({ _id: .... })
const getImageWithTarget = (target) => {
  return new Promise((resolve, reject) => {
      ImageModel.findOne(target).then(
          image => {
            resolve(image);
          },
          err => {
            reject(err);
          }
      )
  })
}

// Update images
const update = (target, imageInfo) => {
  return new Promise((resolve, reject) => {
      ImageModel.findOneAndUpdate(target, imageInfo).then(
          image => {
             resolve(image);
          },
          err => {
              reject(err);
          }
      )
  })
}

// Delete
const remove = (target) => {
    return new Promise((resolve, reject) => {
        ImageModel.findOneAndRemove(target).then(
            image => {
                resolve();
            },
            err => {
                reject(err);
            }
        )
    })
}

module.exports = {
  create,
  getImageWithTarget,
  update,
  remove
}
