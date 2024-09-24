/**
 *@NApiVersion 2.x
 *@NScriptType ClientScript
 */
define(['N/https', 'N/url', 'N/currentRecord', 'N/search', 'N/ui/dialog'], function(https, url, currentRecord, search, dialog) {

    function saveRecord(context) {
        alert('Thank you for supporting xxxx, we have received your Christmas cracker order! Your invoice has been emailed to you (please check your junk mail) payment is required within 3 working days. Your order will be processed & dispatched from our warehouse on receipt of payment. Any questions please email us at xx@xx.co.nz')
        return true;
    }

    return {
        saveRecord: saveRecord
    };
});
