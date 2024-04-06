// eslint-disable-next-line no-unused-vars
import photosDB from './photos.json';
// eslint-disable-next-line no-unused-vars
import friendsDB from './friends.json';

export default {
  getRandomElement(array) {
    if (!array.length) {
      return null;
    }
    const index = Math.round(Math.random() * (array.length - 1));

    return array[index];
  },
  getNextPhoto() {
    const friends = this.getRandomElement(friendsDB);
    const photos = photosDB[friends.id];
    const photo = this.getRandomElement(photos);

    return { friends, url: photo.url };
  },
};
