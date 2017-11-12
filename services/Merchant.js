import Firebase from '../lib/Firebase';
import moment from 'moment';

export default {
  getInfo(aadharNumber) {
    return new Promise(function(resolve, reject) {
      let startTime = moment()

      Firebase.database().ref('data').child(aadharNumber).once('value')
        .then(snapshot => {
          resolve(snapshot.val());
        }).catch(err => {
          reject(err);
        });
    });
  },

  getProfile(aadharNumber) {
    return new Promise(function(resolve, reject) {
      let startTime = moment()

      Firebase.database().ref('merchants').child(aadharNumber).once('value')
        .then(snapshot => {
          resolve(snapshot.val());
        }).catch(err => {
          reject(err);
        });
    });
  },

  create(merchant) {
    merchant.currentAmountInWallet = 0;
    Firebase.database().ref('merchants').child(merchant.aadhar_number).set(merchant);
  },

  transferMoney(merchant) {
    delete merchant['visible'];
    merchant.currentAmountInWallet = merchant.currentAmountInWallet - merchant.currentAmountInWallet;
    return Firebase.database().ref('merchants').child(merchant.aadhar_number).set(merchant);
  }
}
