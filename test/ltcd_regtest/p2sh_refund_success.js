const {test} = require('tap');

const {refundSuccess} = require('./../macros');

[false, true].forEach(isRefundToPublicKeyHash => {
  test(`p2sh refund test: is pkhash? ${isRefundToPublicKeyHash}`, t => {
    return refundSuccess({
      is_refund_to_public_key_hash: isRefundToPublicKeyHash,
      network: 'ltcregtest',
      swap_type: 'p2sh',
    },
    err => {
      if (!!err) {
        console.log(err);
        throw new Error('FailedRefundSuccess');
      }

      t.end();

      return;
    });
  });
});

