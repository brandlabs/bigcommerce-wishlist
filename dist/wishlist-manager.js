define("wishlistManager", [], function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(5);

var iterableToArrayLimit = __webpack_require__(6);

var nonIterableRest = __webpack_require__(7);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(2);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(0);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(1);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/wishlist-manager.js






/**
 * Wishlist API functionality in the front-end, for Stencil themes
 */

/**
 * WishlistManager class provides easy-to-use methods
 * to retrieve, edit, delete and create wishlists
 * directly from the store front-end.
 */
var wishlist_manager_WishlistManager = /*#__PURE__*/function () {
  /**
   * Constructs a new WishlistManager instance.
   *
   * @param {object}   options            The options argument
   * @param {boolean}  options.useCache   Use cached data when possible
   */
  function WishlistManager() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$useCache = _ref.useCache,
        useCache = _ref$useCache === void 0 ? true : _ref$useCache,
        _ref$cacheDuration = _ref.cacheDuration,
        cacheDuration = _ref$cacheDuration === void 0 ? 60 : _ref$cacheDuration;

    classCallCheck_default()(this, WishlistManager);

    // Whether to use cache or not
    this.useCache = Boolean(useCache); // Cache entry expiration time, in minutes

    this.cacheDuration = Number(cacheDuration); // List of URL paths

    this.urls = {
      base: window.location.origin,
      all: '/wishlist.php',
      add: '/wishlist.php?action=addwishlist',
      edit: '/wishlist.php?action=editwishlist',
      "delete": '/wishlist.php?action=deletewishlist',
      view: '/wishlist.php?action=viewwishlistitems',
      add_item: '/wishlist.php?action=add',
      delete_item: '/wishlist.php?action=remove',
      share: '/wishlist.php?action=sharewishlist'
    }; // List of events

    this.events = {
      createWishlist: 'createWishlist',
      deleteWishlist: 'deleteWishlist',
      updateWishlist: 'updateWishlist',
      addWishlistItem: 'addWishlistItem',
      deleteWishlistItem: 'deleteWishlistItem'
    }; // List of event listeners - keyed by event name

    this.eventListeners = {}; // Use "makeRequest" from stencil-utils to make AJAX requests
    // eslint-disable-next-line no-undef

    this.makeRequest = stencilUtils.api.search.makeRequest; // Whether the list of all wishlists has been set once

    this.wishlistsLoaded = false; // Wishlists data - keyed by wishlist ID

    this.wishlists = {};
  }
  /**
   * Cache warming and initial wishlists fetch
   *
   * @param {object} context             Stencil context
   * @param {array}  context.wishlists   Wishlists
   * @param {object} context.urls        URLs
   */


  createClass_default()(WishlistManager, [{
    key: "init",
    value: function () {
      var _init = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _ref2,
            wishlists,
            urls,
            _args = arguments;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref2 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, wishlists = _ref2.wishlists, urls = _ref2.urls;

                // Use wishlists URLs from context
                if (urls && urls.account && urls.account.wishlists) {
                  Object.assign(this.urls, urls.account.wishlists);
                } // Cache warming


                if (this.useCache) {
                  this.getAllWishlistsFromCache();
                } // Initial wishlists fetch, if not available in context


                if (!Array.isArray(wishlists)) {
                  _context.next = 7;
                  break;
                }

                this.setWishlists(wishlists);
                _context.next = 9;
                break;

              case 7:
                _context.next = 9;
                return this.getAllWishlists(true);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
    /* --- API --- */

    /**
     * Gets all wishlists
     *
     * @param  {boolean} forceFetch   True to ignore the cache, False otherwise
     * @return {Promise<array>}       All wishlists
     */

  }, {
    key: "getAllWishlists",
    value: function () {
      var _getAllWishlists = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var forceFetch,
            wishlists,
            content,
            _args2 = arguments;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                forceFetch = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : false;

                if (!(!forceFetch && this.useCache && this.wishlistsLoaded)) {
                  _context2.next = 5;
                  break;
                }

                wishlists = this.getAllWishlistsFromCache();

                if (!wishlists) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", wishlists);

              case 5:
                _context2.next = 7;
                return this.request('all');

              case 7:
                content = _context2.sent;
                return _context2.abrupt("return", content && content.customer && content.customer.wishlists);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAllWishlists() {
        return _getAllWishlists.apply(this, arguments);
      }

      return getAllWishlists;
    }()
    /**
     * Gets a wishlist
     *
     * @param  {integer} wishlistid   Wishlist ID
     * @param  {boolean} forceFetch   True to ignore the cache, False otherwise
     * @return {Promise<object>}      The wishlist
     */

  }, {
    key: "getWishlist",
    value: function () {
      var _getWishlist = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3(wishlistid) {
        var forceFetch,
            wishlist,
            content,
            _args3 = arguments;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                forceFetch = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : false;

                if (!(!forceFetch && this.useCache)) {
                  _context3.next = 5;
                  break;
                }

                wishlist = this.getWishlistFromCache(wishlistid);

                if (!(wishlist && Array.isArray(wishlist.items))) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", wishlist);

              case 5:
                _context3.next = 7;
                return this.request(['view', {
                  wishlistid: wishlistid
                }]);

              case 7:
                content = _context3.sent;
                return _context3.abrupt("return", content && content.wishlist);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getWishlist(_x) {
        return _getWishlist.apply(this, arguments);
      }

      return getWishlist;
    }()
    /**
     * Creates a wishlist
     *
     * @param  {object}  params             The wishlist attributes
     * @param  {string}  params.name        Wishlist name (required)
     * @param  {boolean} params.is_public   Indicates if wishlist is public (required)
     * @param  {integer} params.product_id  ID of a product to be added to the wishlist (optional)
     * @return {Promise<object>}            The created wishlist
     * @fires  createWishlist
     */

  }, {
    key: "createWishlist",
    value: function () {
      var _createWishlist = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4(_ref3) {
        var name, is_public, product_id, urlInfo, payload, content, wishlist, wishlists;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                name = _ref3.name, is_public = _ref3.is_public, product_id = _ref3.product_id;
                urlInfo = ['add'];

                if (product_id) {
                  urlInfo.push({
                    product_id: product_id
                  });
                }

                payload = {
                  submit: '',
                  wishlistname: name
                };

                if (is_public) {
                  payload.publicwishlist = 'on';
                }

                _context4.next = 7;
                return this.request(urlInfo, payload);

              case 7:
                content = _context4.sent;

                // The response varies according to the presence or absence of product ID in the request
                if (product_id) {
                  wishlist = content && content.wishlist;
                } else {
                  // Get all wishlists with the provided name (the newly created wishlist is not provided separately)
                  wishlists = content && content.customer && Array.isArray(content.customer.wishlists) && content.customer.wishlists.filter(function (item) {
                    return item.name === name;
                  }); // From these, pick the wishlist with highest ID

                  wishlist = Array.isArray(wishlists) && wishlists.reduce(function (current, next) {
                    return current.id > next.id ? current : next;
                  });
                }

                this.emitEvent(this.events.createWishlist, {
                  wishlist: wishlist
                });
                return _context4.abrupt("return", wishlist);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function createWishlist(_x2) {
        return _createWishlist.apply(this, arguments);
      }

      return createWishlist;
    }()
    /**
     * Deletes a wishlist
     *
     * @param  {integer} wishlistid   Wishlist ID
     * @return {Promise<undefined>}
     * @fires  deleteWishlist
     */

  }, {
    key: "deleteWishlist",
    value: function () {
      var _deleteWishlist = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5(wishlistid) {
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.request(['delete', {
                  wishlistid: wishlistid
                }], {});

              case 2:
                this.emitEvent(this.events.deleteWishlist, {
                  wishlistid: wishlistid
                });

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteWishlist(_x3) {
        return _deleteWishlist.apply(this, arguments);
      }

      return deleteWishlist;
    }()
    /**
     * Updates a wishlist
     *
     * @param  {integer}  wishlistid         Wishlist ID
     * @param  {object}   params             The wishlist attributes
     * @param  {string}   params.name        Wishlist name (required)
     * @param  {boolean}  params.is_public   Indicates if the wishlist is public (required)
     * @return {Promise<wishlist>}           The updated wishlist
     * @fires  updateWishlist
     */

  }, {
    key: "updateWishlist",
    value: function () {
      var _updateWishlist = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee6(wishlistid, _ref4) {
        var name, is_public, payload, content, wishlist;
        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                name = _ref4.name, is_public = _ref4.is_public;
                payload = {
                  submit: '',
                  wishlistname: name
                };

                if (is_public) {
                  payload.publicwishlist = 'on';
                }

                _context6.next = 5;
                return this.request(['edit', {
                  wishlistid: wishlistid
                }], payload);

              case 5:
                content = _context6.sent;
                wishlist = content && content.customer && Array.isArray(content.customer.wishlists) && content.customer.wishlists.find(function (item) {
                  return item.id === Number(wishlistid);
                });
                this.emitEvent(this.events.updateWishlist, {
                  wishlist: wishlist
                });
                return _context6.abrupt("return", wishlist);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateWishlist(_x4, _x5) {
        return _updateWishlist.apply(this, arguments);
      }

      return updateWishlist;
    }()
    /**
     * Adds a product to a wishlist
     *
     * @param  {integer} wishlistid   Wishlist ID
     * @param  {integer} product_id   ID of the product to be added
     * @return {Promise<item>}        The added item
     * @fires  addWishlistItem
     */

  }, {
    key: "addWishlistItem",
    value: function () {
      var _addWishlistItem = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee7(wishlistid, product_id) {
        var content, wishlist, item;
        return regenerator_default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.request(['add_item', {
                  wishlistid: wishlistid,
                  product_id: product_id
                }], {});

              case 2:
                content = _context7.sent;
                wishlist = content && content.wishlist;
                item = wishlist && Array.isArray(wishlist.items) && wishlist.items.find(function (wishlistItem) {
                  return wishlistItem.product_id === Number(product_id);
                });
                this.emitEvent(this.events.addWishlistItem, {
                  wishlist: wishlist,
                  item: item
                });
                return _context7.abrupt("return", item);

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function addWishlistItem(_x6, _x7) {
        return _addWishlistItem.apply(this, arguments);
      }

      return addWishlistItem;
    }()
    /**
     * Removes a product from a wishlist
     *
     * @param  {integer} wishlistid  Wishlist ID
     * @param  {integer} item_id     Wishlist item ID
     * @return {Promise<undefined>}
     * @fires  deleteWishlistItem
     */

  }, {
    key: "deleteWishlistItem",
    value: function () {
      var _deleteWishlistItem = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee8(wishlistid, item_id) {
        return regenerator_default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.request(['delete_item', {
                  wishlistid: wishlistid,
                  item_id: item_id
                }], {});

              case 2:
                this.emitEvent(this.events.deleteWishlistItem, {
                  wishlistid: wishlistid,
                  item_id: item_id
                });

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function deleteWishlistItem(_x8, _x9) {
        return _deleteWishlistItem.apply(this, arguments);
      }

      return deleteWishlistItem;
    }()
    /* --- EXTENDED API --- */

    /**
     * Gets all wishlists details:
     * - retrieves the items for all wishlists
     * - provides an object keyed by the wishlists IDs
     * - this object is also available as this.wishlists
     *
     * @return {Promise<object>}   All wishlists details.
     */

  }, {
    key: "getAllWishlistsDetails",
    value: function () {
      var _getAllWishlistsDetails = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee9() {
        var _this = this;

        var wishlists;
        return regenerator_default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.getAllWishlists();

              case 2:
                wishlists = _context9.sent;
                _context9.next = 5;
                return Promise.all(wishlists.map(function (wishlist) {
                  return _this.getWishlist(wishlist.id);
                }));

              case 5:
                return _context9.abrupt("return", Object.values(this.wishlists));

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getAllWishlistsDetails() {
        return _getAllWishlistsDetails.apply(this, arguments);
      }

      return getAllWishlistsDetails;
    }()
    /**
     * Determines whether the specified product identifier belongs to any wishlist items
     *
     * @param  {integer} product_id   Product ID
     * @return {Promise<boolean>}     True if the specified product ID belongs to any wishlist, False otherwise
     */

  }, {
    key: "isProductInAnyWishlist",
    value: function () {
      var _isProductInAnyWishlist = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee10(product_id) {
        var wishlists, wishlist, item, i;
        return regenerator_default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.getAllWishlistsDetails();

              case 2:
                wishlists = _context10.sent;
                i = 0;

              case 4:
                if (!(i < wishlists.length)) {
                  _context10.next = 12;
                  break;
                }

                wishlist = wishlists[i];
                item = wishlist.items.find(function (wishlistItem) {
                  return wishlistItem.product_id === Number(product_id);
                });

                if (!item) {
                  _context10.next = 9;
                  break;
                }

                return _context10.abrupt("return", true);

              case 9:
                i++;
                _context10.next = 4;
                break;

              case 12:
                return _context10.abrupt("return", false);

              case 13:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function isProductInAnyWishlist(_x10) {
        return _isProductInAnyWishlist.apply(this, arguments);
      }

      return isProductInAnyWishlist;
    }()
    /* --- REMOTE REQUEST --- */

    /**
     * Builds URL for the remote requests
     * It uses this.urls.base as base, and this.urls[key] as path
     *
     * Both arguments can be passed as an array, in the first argument
     *
     * @param  {string} key      URL key in this.urls object
     * @param  {object} params   Query string parameters to be added
     * @return {string}          Full URL
     */

  }, {
    key: "getUrl",
    value: function getUrl(key, params) {
      if (Array.isArray(key)) {
        // eslint-disable-next-line no-param-reassign
        var _key = key;

        var _key2 = slicedToArray_default()(_key, 2);

        key = _key2[0];
        params = _key2[1];
      }

      var url = new URL(this.urls[key], this.urls.base);

      if (params) {
        Object.keys(params).forEach(function (name) {
          url.searchParams.append(name, params[name]);
        });
      }

      return url.toString();
    }
    /**
     * Wrapper around stencil-utils "makeRequest" to perform the remote calls:
     * - urlInfo is passed as argument to this.getUrl
     * - if payload is undefined, 'GET' method will be used; otherwise, 'POST'
     * - templates/components/custom/json-this.html file is required in the theme
     * - makeRequest takes care of stencil headers, including the XSRF token
     * - returned wishlists data is automatically used to populate this.wishlists
     *
     * @param  {string|array} urlInfo   The url information (key and params)
     * @param  {object}       payload   The request payload
     * @return {Promise<object>}        The response object (parsed JSON)
     */

  }, {
    key: "request",
    value: function () {
      var _request = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee11(urlInfo, payload) {
        var _this2 = this;

        var url, method, options;
        return regenerator_default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                url = this.getUrl(urlInfo);
                method = typeof payload === 'undefined' ? 'GET' : 'POST';
                options = {
                  template: 'custom/json-this'
                };

                if (method === 'POST') {
                  options.params = payload;
                }

                return _context11.abrupt("return", new Promise(function (resolve, reject) {
                  _this2.makeRequest(url, method, options, false, function (error, response) {
                    if (error) {
                      reject(error);
                    } else {
                      try {
                        var content = JSON.parse(response);

                        if (content && content.customer && Array.isArray(content.customer.wishlists)) {
                          _this2.setWishlists(content.customer.wishlists);
                        }

                        if (content && content.wishlist && Array.isArray(content.wishlist.items)) {
                          _this2.setWishlistDetails(content.wishlist);
                        }

                        resolve(content);
                      } catch (contentError) {
                        reject(contentError);
                      }
                    }
                  });
                }));

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function request(_x11, _x12) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
    /* --- LOCAL DATA --- */

    /**
     * Updates this.wishlists with the provided wishlists information
     *
     * @param {array} wishlists   The wishlists data
     */

  }, {
    key: "setWishlists",
    value: function setWishlists(wishlists) {
      var _this3 = this;

      // Update this.wishlists
      wishlists.forEach(function (wishlist) {
        return _this3.setWishlistDetails(wishlist);
      }); // Pluck the wishlists IDs as strings

      var wishlistids = wishlists.reduce(function (ids, wishlist) {
        ids.push(wishlist.id);
        return ids;
      }, []); // Remove the entries in this.wishlists which does not exist in wishlists

      Object.keys(this.wishlists).forEach(function (wishlistid) {
        if (wishlistids.indexOf(Number(wishlistid)) === -1) {
          delete _this3.wishlists[wishlistid];
        }
      });
      this.purgeWishlistsCache(wishlistids);
      this.wishlistsLoaded = true;
    }
    /**
     * Updates this.wishlists with the information provided for a single wishlist
     *
     * @param {object} wishlist   The wishlist data
     */

  }, {
    key: "setWishlistDetails",
    value: function setWishlistDetails(wishlist) {
      if (typeof this.wishlists[wishlist.id] === 'undefined') {
        this.wishlists[wishlist.id] = wishlist;
      } else {
        Object.assign(this.wishlists[wishlist.id], wishlist);
      } // If the items array is updated, we take care of updating num_items accordingly


      if (Array.isArray(wishlist.items) && typeof this.wishlists[wishlist.id].num_items === 'number') {
        this.wishlists[wishlist.id].num_items = wishlist.items.length;
      }

      this.saveWishlistInCache(this.wishlists[wishlist.id]);
    }
    /* --- CACHE --- */

    /**
     * Removes deleted entries from wishlists cache
     *
     * @param {array}  wishlistids   IDs of the current wishlists to keep
     */

  }, {
    key: "purgeWishlistsCache",
    value: function purgeWishlistsCache(wishlistids) {
      var keys = Object.keys(localStorage).filter(function (key) {
        return key.startsWith('wishlist-');
      });
      var keyRegex = /^wishlist-(\d+)$/;
      keys.forEach(function (key) {
        var match = key.match(keyRegex);

        if (match) {
          var wishlistid = match[1]; // Remove the cached entry which does not exist in wishlists anymore

          if (wishlistids.indexOf(Number(wishlistid)) === -1) {
            localStorage.removeItem(key);
          }
        }
      });
    }
    /**
     * Store a wishlist in cache
     *
     * @param {object} wishlist   Wishlist object
     */

  }, {
    key: "saveWishlistInCache",
    value: function saveWishlistInCache(wishlist) {
      // Add wishlist to cache
      var key = "wishlist-".concat(wishlist.id);
      var created_at = Date.now();
      localStorage.setItem(key, JSON.stringify({
        created_at: created_at,
        wishlist: wishlist
      }));
    }
    /**
     * Retrieves all stored wishlists from cache
     *
     * @return {array|undefined}   Wishlists
     */

  }, {
    key: "getAllWishlistsFromCache",
    value: function getAllWishlistsFromCache() {
      var _this4 = this;

      var keys = Object.keys(localStorage).filter(function (key) {
        return key.startsWith('wishlist-');
      });
      var keyRegex = /^wishlist-(\d+)$/;
      var wishlists = [];
      keys.forEach(function (key) {
        var match = key.match(keyRegex);

        if (match) {
          var wishlistid = match[1];

          var wishlist = _this4.getWishlistFromCache(wishlistid);

          if (wishlist) {
            wishlists.push(wishlist);
          }
        }
      });

      if (wishlists.length > 0) {
        return wishlists;
      }
    }
    /**
     * Retrieves a wishlist from cache
     *
     * @param  {integer} wishlistid   Wishlist ID
     * @return {object|undefined}     Wishlist
     */

  }, {
    key: "getWishlistFromCache",
    value: function getWishlistFromCache(wishlistid) {
      var key = "wishlist-".concat(wishlistid);
      var value = localStorage.getItem(key);
      var entry;

      if (typeof value !== 'string') {
        return;
      }

      try {
        entry = JSON.parse(value);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("Invalid '".concat(key, "' entry at localStorage"));
      }

      if (entry && entry.created_at && !this.isExpired(entry) && entry.wishlist && entry.wishlist.id) {
        this.setWishlistDetails(entry.wishlist);
        return entry.wishlist;
      }
    }
    /**
     * Determines whether the cache entry is expired
     *
     * @param  {object} entry             Cache entry
     * @param  {number} entry.created_at  Timestamp of cache entry creation time
     * @return {boolean}                  True if cache entry is expired, False otherwise
     */

  }, {
    key: "isExpired",
    value: function isExpired(_ref5) {
      var created_at = _ref5.created_at;
      var now = Date.now();
      var ellapsed = now - created_at; // milliseconds since entry creation

      var limit = this.cacheDuration * 60 * 1000; // converts from minutes to milliseconds

      return ellapsed > limit;
    }
    /* --- EVENTS --- */

    /**
     * Register an event listener
     *
     * @param {string}   name       Event name (one of this.events values)
     * @param {function} callback   The function to run when the event is triggered
     */

  }, {
    key: "on",
    value: function on(name, callback) {
      if (!Array.isArray(this.eventListeners[name])) {
        this.eventListeners[name] = [];
      }

      if (typeof callback !== 'function') {
        throw new Error('Callback must be a function.');
      }

      this.eventListeners[name].push(callback);
    }
    /**
     * Unregister an event listener
     *
     * @param {string}   name       Event name (one of this.events values)
     * @param {function} callback   The function to be removed from listeners
     */

  }, {
    key: "off",
    value: function off(name, callback) {
      if (!Array.isArray(this.eventListeners[name])) {
        return;
      }

      var index = this.eventListeners[name].indexOf(callback);

      if (index > -1) {
        this.eventListeners[name].splice(index, 1);
      }
    }
    /**
     * Call the listeners registered for an event
     *
     * @param {string} name      Event name (one of this.events values)
     * @param {*}      payload   The event payload (passed as a single argument)
     */

  }, {
    key: "emitEvent",
    value: function emitEvent(name, payload) {
      var _this5 = this;

      if (!Array.isArray(this.eventListeners[name])) {
        return;
      }

      this.eventListeners[name].forEach(function (listener) {
        listener.call(_this5, payload);
      });
    }
  }]);

  return WishlistManager;
}();

/* harmony default export */ var wishlist_manager = (wishlist_manager_WishlistManager);
// CONCATENATED MODULE: ./index.js

var wishlistManager = new wishlist_manager();
/* harmony default export */ var index = __webpack_exports__["default"] = (wishlistManager);

/***/ })
/******/ ])});;