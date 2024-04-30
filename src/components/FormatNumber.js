import React from 'react'

const formatAccountId = (accountId) => {
    const accountIdStr = String(accountId);
  
    if (accountIdStr.length < 8) {
      return accountIdStr;
    } else {
      const maskedPart = '*'.repeat(accountIdStr.length - 8) + accountIdStr.slice(-8);
      return maskedPart;
    }
  };
  
  <td>{formatAccountId(promise.seller_account_id)}</td>
  
export default FormatNumber


