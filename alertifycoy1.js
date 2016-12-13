/*
 * @message  {String or DOMElement} The notification message contents.
 * @type     {String }              The Type of notification message (CSS class name 'ajs-{type}' to be added).
 * @wait     {Number}               The time (in seconds) to wait before the notification is auto-dismissed.
 * @callback {Function}             A callback function to be invoked when the notification is dismissed.
 * 
 * @return {Object} Notification object.
 *
 * alertify.notify(message, type, wait, callback)
 *
 */
var notification = alertify.notify('sample', 'success', 5, function(){  console.log('dismissed'); });