//@ sourceMappingURL=main.map
(function() {
  var RangeControl, RangeTable;

  RangeControl = (function() {
    function RangeControl(el) {
      this.el = el;
      this.buildRangeTable();
    }

    RangeControl.prototype.buildRangeTable = function() {
      return this.rangeTable = new RangeTable(this.el.find(".range-control__range table"));
    };

    return RangeControl;

  })();

  RangeTable = (function() {
    function RangeTable(el) {
      this.el = el;
      this.rangeCells = this.el.find("td");
      this.data = [];
      this.height = this.el.height();
      this.buildDataFromCells();
      this.buildCells();
      this.bindHoverToCells();
    }

    RangeTable.prototype.buildDataFromCells = function() {
      var x,
        _this = this;

      this.rangeCells.each(function(i, rangeCell) {
        rangeCell = $(rangeCell);
        return _this.data.push({
          volume: rangeCell.data("volume"),
          rate: rangeCell.data("rate")
        });
      });
      return this.maxVolume = Math.max.apply(null, (function() {
        var _i, _len, _ref, _results;

        _ref = this.data;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          x = _ref[_i];
          _results.push(x.volume);
        }
        return _results;
      }).call(this));
    };

    RangeTable.prototype.buildCells = function() {
      var _this = this;

      return this.rangeCells.each(function(i, rangeCell) {
        rangeCell = $(rangeCell);
        return $("<div/>").appendTo(rangeCell).height((100 / _this.maxVolume * rangeCell.data("volume")) * _this.height / 100);
      });
    };

    RangeTable.prototype.bindHoverToCells = function() {
      return this.rangeCells.on("mouseover", function() {});
    };

    return RangeTable;

  })();

  new RangeControl($(".range-control"));

}).call(this);
