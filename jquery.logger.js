/*jslint adsafe: false, bitwise: true, browser: true, cap: false, css: false,
  debug: false, devel: true, eqeqeq: true, es5: false, evil: false,
  forin: false, fragment: false, immed: true, laxbreak: false, newcap: true,
  nomen: false, on: false, onevar: true, passfail: false, plusplus: true,
  regexp: true, rhino: true, safe: false, strict: false, sub: false,
  undef: true, white: false, widget: false, windows: false */
/*global jQuery: false */
"use strict";


/**
* @module jQuery
*/

/**
* A quick and dirty jQuery logger; working with either a div container with 
* the ID "jquery-log-console" or the browser's <tt>console</tt> object.
* The div takes precedence; if neither of both exists, the log calls will be
* silently ignored.
* 
* @class    log
* @extends  jQuery
* @static
* @author   Carlo Zottmann, carlo@municode.de, http://municode.de/
*/

jQuery.log = (function() {
  
  function print( level, msg, o ) {
    var div = jQuery("#jquery-log-console"),
      outputToDiv = ( div.size() > 0 ),
      hasConsole = ( typeof console !== "undefined" ),
      date = new Date(),
      time = date.toLocaleTimeString() + "." + date.getMilliseconds();

    if ( !hasConsole && !outputToDiv ) {
      return;
    }
    
    if ( typeof o !== "undefined" ) {
      if (outputToDiv) {
        div.append( [
          "<div class='jquery-logger-console-", level, "'>",
          "[", time, "] ",
          msg, " ", o,
          "</div>"
        ].join("") );
      }
      else {
        console[ level ]( "[%s] %s: %o", time, msg, o );
      }
    }
    else {
      if (outputToDiv) {
        div.append( [
          "<div class='jquery-logger-console-", level, "'>",
          "[", time, "] ",
          msg,
          "</div>"
        ].join("") );
      }
      else {
        console[ level ]( "[%s] %s", time, msg );
      }
    }
  }
  
  return {
    /**
    * Logs an error message.
    * @param  msg {String} A string to log.
    * @param  o {Object} An object to log. Optional.
    */
    error: function( msg, o ) {
      print( "error", msg, o );
    },
    
    /**
    * Logs a warning message.
    * @param  msg {String} A string to log.
    * @param  o {Object} An object to log. Optional.
    */
    warning: function( msg, o ) {
      print( "warn", msg, o );
    },
    
    /**
    * Logs a debug message.
    * @param  msg {String} A string to log.
    * @param  o {Object} An object to log. Optional.
    */
    debug: function( msg, o ) {
      print( "debug", msg, o );
    },
    
    /**
    * Logs an info message.
    * @param  msg {String} A string to log.
    * @param  o {Object} An object to log. Optional.
    */
    info: function( msg, o ) {
      print( "info", msg, o );
    }
  };

}());
