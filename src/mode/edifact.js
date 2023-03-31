"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var EdifactHighlightRules = require("./edifact_highlight_rules").EdifactHighlightRules;
var DocCommentBehaviour = require("../mode/behaviour/doc_comment").DocCommentBehaviour;

var Mode = function() {
   
    this.HighlightRules = EdifactHighlightRules;
    this.$behaviour = new DocCommentBehaviour();
};
oop.inherits(Mode, TextMode);

(function() {
    this.$id = "ace/mode/edifact";
    this.snippetFileId = "ace/snippets/edifact";
}).call(Mode.prototype);

exports.Mode = Mode;
