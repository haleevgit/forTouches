System.register("chunks:///_virtual/main", ['./TouchCatcher.ts'], function () {
  'use strict';

  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/TouchCatcher.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, input, Input, KeyCode, Vec3, tween, Quat, Vec4, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      Vec3 = module.Vec3;
      tween = module.tween;
      Quat = module.Quat;
      Vec4 = module.Vec4;
      Component = module.Component;
    }],
    execute: function () {
      exports({
        ButtonTypes: void 0,
        State: void 0
      });

      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "8604d6rwGxFLY7qPjbtMGE4", "TouchCatcher", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var State;

      (function (State) {
        State[State["DISABLED"] = 0] = "DISABLED";
        State[State["HOVER"] = 1] = "HOVER";
        State[State["FIRST_FACE"] = 2] = "FIRST_FACE";
      })(State || (State = exports('State', {})));

      var ButtonTypes;

      (function (ButtonTypes) {
        ButtonTypes[ButtonTypes["LEFT"] = 0] = "LEFT";
        ButtonTypes[ButtonTypes["NONE"] = 1] = "NONE";
        ButtonTypes[ButtonTypes["RIGHT"] = 2] = "RIGHT";
      })(ButtonTypes || (ButtonTypes = exports('ButtonTypes', {})));

      var TouchCatcher = exports('TouchCatcher', (_dec = ccclass("TouchCatcher"), _dec2 = property(Camera), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TouchCatcher, _Component);

        function TouchCatcher() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "camera", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "sensitivity", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "keyboardVelocity", _descriptor3, _assertThisInitialized(_this));

          _this._typeButton = ButtonTypes.NONE;
          _this._cameraMode = State.HOVER;
          _this._keyButtonPressed = null;
          _this._possibleKeys = [KeyCode.KEY_W, KeyCode.KEY_S, KeyCode.KEY_A, KeyCode.KEY_D];
          _this._keyboardVelocity = void 0;
          return _this;
        }

        var _proto = TouchCatcher.prototype;

        _proto.onLoad = function onLoad() {
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.on(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          this._keyboardVelocity = 1 / this.keyboardVelocity;
        };

        _proto.update = function update() {
          if (this._keyButtonPressed) this._keyboardMoving();
        };

        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        };

        _proto._keyboardMoving = function _keyboardMoving() {
          switch (this._keyButtonPressed) {
            case KeyCode.KEY_W:
              this.camera.node.position = new Vec3(this.camera.node.position.x, this.camera.node.position.y, this.camera.node.position.z - this._keyboardVelocity);
              break;

            case KeyCode.KEY_D:
              this.camera.node.position = new Vec3(this.camera.node.position.x + this._keyboardVelocity, this.camera.node.position.y, this.camera.node.position.z);
              break;

            case KeyCode.KEY_A:
              this.camera.node.position = new Vec3(this.camera.node.position.x - this._keyboardVelocity, this.camera.node.position.y, this.camera.node.position.z);
              break;

            case KeyCode.KEY_S:
              this.camera.node.position = new Vec3(this.camera.node.position.x, this.camera.node.position.y, this.camera.node.position.z + this._keyboardVelocity);
              break;
          }
        };

        _proto._transition = function _transition(endState) {
          var _this2 = this;

          this._cameraMode = State.DISABLED;

          switch (endState) {
            case State.HOVER:
              {
                tween(this.camera.node).to(1.0, {
                  rotation: new Quat(-0.3, this.camera.node.rotation.y, this.camera.node.rotation.z, this.camera.node.rotation.w)
                }).call(function () {
                  _this2._cameraMode = State.HOVER;
                }).start();
                tween(this.camera.node).to(1.0, {
                  position: new Vec3(this.camera.node.position.x, 10, this.camera.node.position.z)
                }).start();
              }
              break;

            case State.FIRST_FACE:
              {
                tween(this.camera.node).to(1.0, {
                  rotation: new Quat(0, this.camera.node.rotation.y, this.camera.node.rotation.z, this.camera.node.rotation.w)
                }).call(function () {
                  _this2._cameraMode = State.FIRST_FACE;
                }).start();
                tween(this.camera.node).to(1.0, {
                  position: new Vec3(this.camera.node.position.x, this.camera.node.position.y - 2, this.camera.node.position.z)
                }).start();
              }
              break;
          }
        };

        _proto.onTouchStart = function onTouchStart(event) {
          if (this._cameraMode === State.DISABLED) return; // console.log(event.getLocation());  // location on screen space
          // console.log(event.getUILocation());  // location on UI space
        };

        _proto.onTouchMove = function onTouchMove(event) {
          if (this._cameraMode === State.DISABLED) return;
          if (this._typeButton === ButtonTypes.RIGHT) return;

          if (this._cameraMode === State.HOVER) {
            var touches = event.getTouches();

            if (touches.length < 2) {
              this.camera.node.position = new Vec3(this.camera.node.position.x - event.getDeltaX() / 100, this.camera.node.position.y, this.camera.node.position.z + event.getDeltaY() / 100);
            } else {
              this.camera.node.position = new Vec3(100000000, this.camera.node.position.y, this.camera.node.position.z + event.getDeltaY() / 100);
              var pos1 = touches[0].getLocation();
              var pos2 = touches[1].getLocation();
              var currentDistance = pos1.clone().subtract(pos2).length();
              console.log(currentDistance);
            }
          }

          if (this._cameraMode === State.FIRST_FACE) {
            this.camera.node.position = new Vec3(this.camera.node.position.x, this.camera.node.position.y, this.camera.node.position.z + event.getDeltaY() / 100);
            this.camera.node.rotation = new Vec4(this.camera.node.rotation.x, this.camera.node.rotation.y - event.getDeltaX() / this.sensitivity, this.camera.node.rotation.z, this.camera.node.rotation.w);
          }
        };

        _proto.onTouchEnd = function onTouchEnd(event) {
          if (this._cameraMode === State.DISABLED) return;
        };

        _proto.onTouchCancel = function onTouchCancel(event) {
          if (this._cameraMode === State.DISABLED) return;
        };

        _proto.onMouseWheel = function onMouseWheel(event) {
          if (this._cameraMode === State.DISABLED) return;
          this.camera.node.position = new Vec3(this.camera.node.position.x, this.camera.node.position.y - event.getScrollY() / this.sensitivity, this.camera.node.position.z);

          if (this.camera.node.position.y < 2 && this._cameraMode === State.HOVER) {
            this._transition(State.FIRST_FACE);
          }

          if (this.camera.node.position.y > 3 && this._cameraMode === State.FIRST_FACE) {
            this._transition(State.HOVER);
          }
        };

        _proto.onMouseMove = function onMouseMove(event) {
          if (this._cameraMode === State.DISABLED) return;

          if (this._typeButton === ButtonTypes.RIGHT) {
            this.camera.node.rotation = new Vec4(this.camera.node.rotation.x, this.camera.node.rotation.y + event.getDeltaX() / this.sensitivity, this.camera.node.rotation.z, this.camera.node.rotation.w);
          }

          if (this._typeButton === ButtonTypes.NONE && this._cameraMode === State.FIRST_FACE) {
            this.camera.node.rotation = new Vec4(this.camera.node.rotation.x + event.getDeltaY() / this.sensitivity, this.camera.node.rotation.y - event.getDeltaX() / this.sensitivity, this.camera.node.rotation.z, this.camera.node.rotation.w);
          }
        };

        _proto.onMouseDown = function onMouseDown(event) {
          if (this._cameraMode === State.DISABLED) return;
          this._typeButton = event.getButton(); //this.camera.node.position = new Vec3(this.camera.node.position.x, this.camera.node.position.y - event.getScrollY()/1000, this.camera.node.position.z); 
        };

        _proto.onMouseUp = function onMouseUp(event) {
          if (this._cameraMode === State.DISABLED) return;
          this._typeButton = ButtonTypes.NONE; //this.camera.node.position = new Vec3(this.camera.node.position.x, this.camera.node.position.y - event.getScrollY()/1000, this.camera.node.position.z); 
        };

        _proto.onKeyDown = function onKeyDown(event) {
          if (this._possibleKeys.includes(event.keyCode)) {
            if (!this._keyButtonPressed) {
              this._keyButtonPressed = event.keyCode;
            }
          }
        };

        _proto.onKeyUp = function onKeyUp(event) {
          if (this._keyButtonPressed === event.keyCode) this._keyButtonPressed = null;
        };

        return TouchCatcher;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sensitivity", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1000;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "keyboardVelocity", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100000000000;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});