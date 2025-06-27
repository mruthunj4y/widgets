const validate = validate10;
const func2 = require("ajv/dist/runtime/ucs2length").default;
const pattern0 = new RegExp("^[\\w ]+$", "u");
const pattern4 = new RegExp("^[\\w]+$", "u");
const pattern10 = new RegExp("^[ \\w]+$", "u");
const pattern11 = new RegExp("^[ \\w\\.,:]+$", "u");
const formats0 = require("ajv-formats/dist/formats").fullFormats["date-time"];
const formats2 = require("ajv-formats/dist/formats").fullFormats.uri;
const pattern1 = new RegExp("^0x[a-fA-F0-9]{40}$", "u");
const pattern2 = new RegExp("^[ \\w.'+\\-%/À-ÖØ-öø-ÿ:&\\[\\]\\(\\)]+$", "u");
const pattern3 = new RegExp("^[a-zA-Z0-9+\\-%/$.]+$", "u");
function validate15(data) {
  let {
    instancePath = "",
    parentData,
    parentDataProperty,
    rootData = data
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  const _errs3 = errors;
  let valid2 = false;
  const _errs4 = errors;
  if (errors === _errs4) {
    if (typeof data === "string") {
      if (func2(data) > 42) {
        const err0 = {
          instancePath,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
          keyword: "maxLength",
          params: {
            limit: 42
          },
          message: "must NOT have more than 42 characters"
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (func2(data) < 1) {
          const err1 = {
            instancePath,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
            keyword: "minLength",
            params: {
              limit: 1
            },
            message: "must NOT have fewer than 1 characters"
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
        keyword: "type",
        params: {
          type: "string"
        },
        message: "must be string"
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid1 = _errs4 === errors;
  valid2 = valid2 || _valid1;
  if (!valid2) {
    const _errs6 = errors;
    if (typeof data !== "boolean") {
      const err3 = {
        instancePath,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
        keyword: "type",
        params: {
          type: "boolean"
        },
        message: "must be boolean"
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    var _valid1 = _errs6 === errors;
    valid2 = valid2 || _valid1;
    if (!valid2) {
      const _errs8 = errors;
      if (!(typeof data == "number" && isFinite(data))) {
        const err4 = {
          instancePath,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
          keyword: "type",
          params: {
            type: "number"
          },
          message: "must be number"
        };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
      var _valid1 = _errs8 === errors;
      valid2 = valid2 || _valid1;
      if (!valid2) {
        const _errs10 = errors;
        if (data !== null) {
          const err5 = {
            instancePath,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
            keyword: "type",
            params: {
              type: "null"
            },
            message: "must be null"
          };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
        var _valid1 = _errs10 === errors;
        valid2 = valid2 || _valid1;
      }
    }
  }
  if (!valid2) {
    const err6 = {
      instancePath,
      schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
      keyword: "anyOf",
      params: {},
      message: "must match a schema in anyOf"
    };
    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }
    errors++;
  } else {
    errors = _errs3;
    if (vErrors !== null) {
      if (_errs3) {
        vErrors.length = _errs3;
      } else {
        vErrors = null;
      }
    }
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const err7 = {
      instancePath,
      schemaPath: "#/anyOf",
      keyword: "anyOf",
      params: {},
      message: "must match a schema in anyOf"
    };
    if (vErrors === null) {
      vErrors = [err7];
    } else {
      vErrors.push(err7);
    }
    errors++;
    validate15.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate15.errors = vErrors;
  return errors === 0;
}
function validate14(data) {
  let {
    instancePath = "",
    parentData,
    parentDataProperty,
    rootData = data
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  const _errs3 = errors;
  let valid2 = false;
  const _errs4 = errors;
  if (errors === _errs4) {
    if (typeof data === "string") {
      if (func2(data) > 42) {
        const err0 = {
          instancePath,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
          keyword: "maxLength",
          params: {
            limit: 42
          },
          message: "must NOT have more than 42 characters"
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (func2(data) < 1) {
          const err1 = {
            instancePath,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
            keyword: "minLength",
            params: {
              limit: 1
            },
            message: "must NOT have fewer than 1 characters"
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
        keyword: "type",
        params: {
          type: "string"
        },
        message: "must be string"
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid1 = _errs4 === errors;
  valid2 = valid2 || _valid1;
  if (!valid2) {
    const _errs6 = errors;
    if (typeof data !== "boolean") {
      const err3 = {
        instancePath,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
        keyword: "type",
        params: {
          type: "boolean"
        },
        message: "must be boolean"
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    var _valid1 = _errs6 === errors;
    valid2 = valid2 || _valid1;
    if (!valid2) {
      const _errs8 = errors;
      if (!(typeof data == "number" && isFinite(data))) {
        const err4 = {
          instancePath,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
          keyword: "type",
          params: {
            type: "number"
          },
          message: "must be number"
        };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
      var _valid1 = _errs8 === errors;
      valid2 = valid2 || _valid1;
      if (!valid2) {
        const _errs10 = errors;
        if (data !== null) {
          const err5 = {
            instancePath,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
            keyword: "type",
            params: {
              type: "null"
            },
            message: "must be null"
          };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
        var _valid1 = _errs10 === errors;
        valid2 = valid2 || _valid1;
      }
    }
  }
  if (!valid2) {
    const err6 = {
      instancePath,
      schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
      keyword: "anyOf",
      params: {},
      message: "must match a schema in anyOf"
    };
    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }
    errors++;
  } else {
    errors = _errs3;
    if (vErrors !== null) {
      if (_errs3) {
        vErrors.length = _errs3;
      } else {
        vErrors = null;
      }
    }
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs12 = errors;
    if (errors === _errs12) {
      if (data && typeof data == "object" && !Array.isArray(data)) {
        if (Object.keys(data).length > 10) {
          const err7 = {
            instancePath,
            schemaPath: "#/anyOf/1/maxProperties",
            keyword: "maxProperties",
            params: {
              limit: 10
            },
            message: "must NOT have more than 10 properties"
          };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        } else {
          for (const key0 in data) {
            const _errs14 = errors;
            const _errs15 = errors;
            if (errors === _errs15) {
              if (typeof key0 === "string") {
                if (func2(key0) > 40) {
                  const err8 = {
                    instancePath,
                    schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                    keyword: "maxLength",
                    params: {
                      limit: 40
                    },
                    message: "must NOT have more than 40 characters",
                    propertyName: key0
                  };
                  if (vErrors === null) {
                    vErrors = [err8];
                  } else {
                    vErrors.push(err8);
                  }
                  errors++;
                } else {
                  if (func2(key0) < 1) {
                    const err9 = {
                      instancePath,
                      schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                      keyword: "minLength",
                      params: {
                        limit: 1
                      },
                      message: "must NOT have fewer than 1 characters",
                      propertyName: key0
                    };
                    if (vErrors === null) {
                      vErrors = [err9];
                    } else {
                      vErrors.push(err9);
                    }
                    errors++;
                  } else {
                    if (!pattern4.test(key0)) {
                      const err10 = {
                        instancePath,
                        schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                        keyword: "pattern",
                        params: {
                          pattern: "^[\\w]+$"
                        },
                        message: "must match pattern \"" + "^[\\w]+$" + "\"",
                        propertyName: key0
                      };
                      if (vErrors === null) {
                        vErrors = [err10];
                      } else {
                        vErrors.push(err10);
                      }
                      errors++;
                    }
                  }
                }
              } else {
                const err11 = {
                  instancePath,
                  schemaPath: "#/definitions/ExtensionIdentifier/type",
                  keyword: "type",
                  params: {
                    type: "string"
                  },
                  message: "must be string",
                  propertyName: key0
                };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
            }
            var valid3 = _errs14 === errors;
            if (!valid3) {
              const err12 = {
                instancePath,
                schemaPath: "#/anyOf/1/propertyNames",
                keyword: "propertyNames",
                params: {
                  propertyName: key0
                },
                message: "property name must be valid"
              };
              if (vErrors === null) {
                vErrors = [err12];
              } else {
                vErrors.push(err12);
              }
              errors++;
              break;
            }
          }
          if (valid3) {
            for (const key1 in data) {
              const _errs18 = errors;
              if (!validate15(data[key1], {
                instancePath: instancePath + "/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"),
                parentData: data,
                parentDataProperty: key1,
                rootData
              })) {
                vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
                errors = vErrors.length;
              }
              var valid5 = _errs18 === errors;
              if (!valid5) {
                break;
              }
            }
          }
        }
      } else {
        const err13 = {
          instancePath,
          schemaPath: "#/anyOf/1/type",
          keyword: "type",
          params: {
            type: "object"
          },
          message: "must be object"
        };
        if (vErrors === null) {
          vErrors = [err13];
        } else {
          vErrors.push(err13);
        }
        errors++;
      }
    }
    var _valid0 = _errs12 === errors;
    valid0 = valid0 || _valid0;
  }
  if (!valid0) {
    const err14 = {
      instancePath,
      schemaPath: "#/anyOf",
      keyword: "anyOf",
      params: {},
      message: "must match a schema in anyOf"
    };
    if (vErrors === null) {
      vErrors = [err14];
    } else {
      vErrors.push(err14);
    }
    errors++;
    validate14.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate14.errors = vErrors;
  return errors === 0;
}
function validate13(data) {
  let {
    instancePath = "",
    parentData,
    parentDataProperty,
    rootData = data
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  const _errs3 = errors;
  let valid2 = false;
  const _errs4 = errors;
  if (errors === _errs4) {
    if (typeof data === "string") {
      if (func2(data) > 42) {
        const err0 = {
          instancePath,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
          keyword: "maxLength",
          params: {
            limit: 42
          },
          message: "must NOT have more than 42 characters"
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (func2(data) < 1) {
          const err1 = {
            instancePath,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
            keyword: "minLength",
            params: {
              limit: 1
            },
            message: "must NOT have fewer than 1 characters"
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
        keyword: "type",
        params: {
          type: "string"
        },
        message: "must be string"
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid1 = _errs4 === errors;
  valid2 = valid2 || _valid1;
  if (!valid2) {
    const _errs6 = errors;
    if (typeof data !== "boolean") {
      const err3 = {
        instancePath,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
        keyword: "type",
        params: {
          type: "boolean"
        },
        message: "must be boolean"
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    var _valid1 = _errs6 === errors;
    valid2 = valid2 || _valid1;
    if (!valid2) {
      const _errs8 = errors;
      if (!(typeof data == "number" && isFinite(data))) {
        const err4 = {
          instancePath,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
          keyword: "type",
          params: {
            type: "number"
          },
          message: "must be number"
        };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
      var _valid1 = _errs8 === errors;
      valid2 = valid2 || _valid1;
      if (!valid2) {
        const _errs10 = errors;
        if (data !== null) {
          const err5 = {
            instancePath,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
            keyword: "type",
            params: {
              type: "null"
            },
            message: "must be null"
          };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
        var _valid1 = _errs10 === errors;
        valid2 = valid2 || _valid1;
      }
    }
  }
  if (!valid2) {
    const err6 = {
      instancePath,
      schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
      keyword: "anyOf",
      params: {},
      message: "must match a schema in anyOf"
    };
    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }
    errors++;
  } else {
    errors = _errs3;
    if (vErrors !== null) {
      if (_errs3) {
        vErrors.length = _errs3;
      } else {
        vErrors = null;
      }
    }
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs12 = errors;
    if (errors === _errs12) {
      if (data && typeof data == "object" && !Array.isArray(data)) {
        if (Object.keys(data).length > 10) {
          const err7 = {
            instancePath,
            schemaPath: "#/anyOf/1/maxProperties",
            keyword: "maxProperties",
            params: {
              limit: 10
            },
            message: "must NOT have more than 10 properties"
          };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        } else {
          for (const key0 in data) {
            const _errs14 = errors;
            const _errs15 = errors;
            if (errors === _errs15) {
              if (typeof key0 === "string") {
                if (func2(key0) > 40) {
                  const err8 = {
                    instancePath,
                    schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                    keyword: "maxLength",
                    params: {
                      limit: 40
                    },
                    message: "must NOT have more than 40 characters",
                    propertyName: key0
                  };
                  if (vErrors === null) {
                    vErrors = [err8];
                  } else {
                    vErrors.push(err8);
                  }
                  errors++;
                } else {
                  if (func2(key0) < 1) {
                    const err9 = {
                      instancePath,
                      schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                      keyword: "minLength",
                      params: {
                        limit: 1
                      },
                      message: "must NOT have fewer than 1 characters",
                      propertyName: key0
                    };
                    if (vErrors === null) {
                      vErrors = [err9];
                    } else {
                      vErrors.push(err9);
                    }
                    errors++;
                  } else {
                    if (!pattern4.test(key0)) {
                      const err10 = {
                        instancePath,
                        schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                        keyword: "pattern",
                        params: {
                          pattern: "^[\\w]+$"
                        },
                        message: "must match pattern \"" + "^[\\w]+$" + "\"",
                        propertyName: key0
                      };
                      if (vErrors === null) {
                        vErrors = [err10];
                      } else {
                        vErrors.push(err10);
                      }
                      errors++;
                    }
                  }
                }
              } else {
                const err11 = {
                  instancePath,
                  schemaPath: "#/definitions/ExtensionIdentifier/type",
                  keyword: "type",
                  params: {
                    type: "string"
                  },
                  message: "must be string",
                  propertyName: key0
                };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
            }
            var valid3 = _errs14 === errors;
            if (!valid3) {
              const err12 = {
                instancePath,
                schemaPath: "#/anyOf/1/propertyNames",
                keyword: "propertyNames",
                params: {
                  propertyName: key0
                },
                message: "property name must be valid"
              };
              if (vErrors === null) {
                vErrors = [err12];
              } else {
                vErrors.push(err12);
              }
              errors++;
              break;
            }
          }
          if (valid3) {
            for (const key1 in data) {
              const _errs18 = errors;
              if (!validate14(data[key1], {
                instancePath: instancePath + "/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"),
                parentData: data,
                parentDataProperty: key1,
                rootData
              })) {
                vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
                errors = vErrors.length;
              }
              var valid5 = _errs18 === errors;
              if (!valid5) {
                break;
              }
            }
          }
        }
      } else {
        const err13 = {
          instancePath,
          schemaPath: "#/anyOf/1/type",
          keyword: "type",
          params: {
            type: "object"
          },
          message: "must be object"
        };
        if (vErrors === null) {
          vErrors = [err13];
        } else {
          vErrors.push(err13);
        }
        errors++;
      }
    }
    var _valid0 = _errs12 === errors;
    valid0 = valid0 || _valid0;
  }
  if (!valid0) {
    const err14 = {
      instancePath,
      schemaPath: "#/anyOf",
      keyword: "anyOf",
      params: {},
      message: "must match a schema in anyOf"
    };
    if (vErrors === null) {
      vErrors = [err14];
    } else {
      vErrors.push(err14);
    }
    errors++;
    validate13.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate13.errors = vErrors;
  return errors === 0;
}
function validate12(data) {
  let {
    instancePath = "",
    parentData,
    parentDataProperty,
    rootData = data
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      if (Object.keys(data).length > 10) {
        validate12.errors = [{
          instancePath,
          schemaPath: "#/maxProperties",
          keyword: "maxProperties",
          params: {
            limit: 10
          },
          message: "must NOT have more than 10 properties"
        }];
        return false;
      } else {
        for (const key0 in data) {
          const _errs1 = errors;
          const _errs2 = errors;
          if (errors === _errs2) {
            if (typeof key0 === "string") {
              if (func2(key0) > 40) {
                const err0 = {
                  instancePath,
                  schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                  keyword: "maxLength",
                  params: {
                    limit: 40
                  },
                  message: "must NOT have more than 40 characters",
                  propertyName: key0
                };
                if (vErrors === null) {
                  vErrors = [err0];
                } else {
                  vErrors.push(err0);
                }
                errors++;
              } else {
                if (func2(key0) < 1) {
                  const err1 = {
                    instancePath,
                    schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                    keyword: "minLength",
                    params: {
                      limit: 1
                    },
                    message: "must NOT have fewer than 1 characters",
                    propertyName: key0
                  };
                  if (vErrors === null) {
                    vErrors = [err1];
                  } else {
                    vErrors.push(err1);
                  }
                  errors++;
                } else {
                  if (!pattern4.test(key0)) {
                    const err2 = {
                      instancePath,
                      schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                      keyword: "pattern",
                      params: {
                        pattern: "^[\\w]+$"
                      },
                      message: "must match pattern \"" + "^[\\w]+$" + "\"",
                      propertyName: key0
                    };
                    if (vErrors === null) {
                      vErrors = [err2];
                    } else {
                      vErrors.push(err2);
                    }
                    errors++;
                  }
                }
              }
            } else {
              const err3 = {
                instancePath,
                schemaPath: "#/definitions/ExtensionIdentifier/type",
                keyword: "type",
                params: {
                  type: "string"
                },
                message: "must be string",
                propertyName: key0
              };
              if (vErrors === null) {
                vErrors = [err3];
              } else {
                vErrors.push(err3);
              }
              errors++;
            }
          }
          var valid0 = _errs1 === errors;
          if (!valid0) {
            const err4 = {
              instancePath,
              schemaPath: "#/propertyNames",
              keyword: "propertyNames",
              params: {
                propertyName: key0
              },
              message: "property name must be valid"
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
            validate12.errors = vErrors;
            return false;
          }
        }
        if (valid0) {
          for (const key1 in data) {
            const _errs5 = errors;
            if (!validate13(data[key1], {
              instancePath: instancePath + "/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"),
              parentData: data,
              parentDataProperty: key1,
              rootData
            })) {
              vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
              errors = vErrors.length;
            }
            var valid2 = _errs5 === errors;
            if (!valid2) {
              break;
            }
          }
        }
      }
    } else {
      validate12.errors = [{
        instancePath,
        schemaPath: "#/type",
        keyword: "type",
        params: {
          type: "object"
        },
        message: "must be object"
      }];
      return false;
    }
  }
  validate12.errors = vErrors;
  return errors === 0;
}
function validate11(data) {
  let {
    instancePath = "",
    parentData,
    parentDataProperty,
    rootData = data
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.chainId === undefined && (missing0 = "chainId") || data.address === undefined && (missing0 = "address") || data.decimals === undefined && (missing0 = "decimals") || data.name === undefined && (missing0 = "name") || data.symbol === undefined && (missing0 = "symbol")) {
        validate11.errors = [{
          instancePath,
          schemaPath: "#/required",
          keyword: "required",
          params: {
            missingProperty: missing0
          },
          message: "must have required property '" + missing0 + "'"
        }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "chainId" || key0 === "address" || key0 === "decimals" || key0 === "name" || key0 === "symbol" || key0 === "logoURI" || key0 === "tags" || key0 === "extensions")) {
            validate11.errors = [{
              instancePath,
              schemaPath: "#/additionalProperties",
              keyword: "additionalProperties",
              params: {
                additionalProperty: key0
              },
              message: "must NOT have additional properties"
            }];
            return false;
          }
        }
        if (_errs1 === errors) {
          if (data.chainId !== undefined) {
            let data0 = data.chainId;
            const _errs2 = errors;
            if (!(typeof data0 == "number" && !(data0 % 1) && !isNaN(data0) && isFinite(data0))) {
              validate11.errors = [{
                instancePath: instancePath + "/chainId",
                schemaPath: "#/properties/chainId/type",
                keyword: "type",
                params: {
                  type: "integer"
                },
                message: "must be integer"
              }];
              return false;
            }
            if (errors === _errs2) {
              if (typeof data0 == "number" && isFinite(data0)) {
                if (data0 < 1 || isNaN(data0)) {
                  validate11.errors = [{
                    instancePath: instancePath + "/chainId",
                    schemaPath: "#/properties/chainId/minimum",
                    keyword: "minimum",
                    params: {
                      comparison: ">=",
                      limit: 1
                    },
                    message: "must be >= 1"
                  }];
                  return false;
                }
              }
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.address !== undefined) {
              let data1 = data.address;
              const _errs4 = errors;
              if (errors === _errs4) {
                if (typeof data1 === "string") {
                  if (!pattern1.test(data1)) {
                    validate11.errors = [{
                      instancePath: instancePath + "/address",
                      schemaPath: "#/properties/address/pattern",
                      keyword: "pattern",
                      params: {
                        pattern: "^0x[a-fA-F0-9]{40}$"
                      },
                      message: "must match pattern \"" + "^0x[a-fA-F0-9]{40}$" + "\""
                    }];
                    return false;
                  }
                } else {
                  validate11.errors = [{
                    instancePath: instancePath + "/address",
                    schemaPath: "#/properties/address/type",
                    keyword: "type",
                    params: {
                      type: "string"
                    },
                    message: "must be string"
                  }];
                  return false;
                }
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.decimals !== undefined) {
                let data2 = data.decimals;
                const _errs6 = errors;
                if (!(typeof data2 == "number" && !(data2 % 1) && !isNaN(data2) && isFinite(data2))) {
                  validate11.errors = [{
                    instancePath: instancePath + "/decimals",
                    schemaPath: "#/properties/decimals/type",
                    keyword: "type",
                    params: {
                      type: "integer"
                    },
                    message: "must be integer"
                  }];
                  return false;
                }
                if (errors === _errs6) {
                  if (typeof data2 == "number" && isFinite(data2)) {
                    if (data2 > 255 || isNaN(data2)) {
                      validate11.errors = [{
                        instancePath: instancePath + "/decimals",
                        schemaPath: "#/properties/decimals/maximum",
                        keyword: "maximum",
                        params: {
                          comparison: "<=",
                          limit: 255
                        },
                        message: "must be <= 255"
                      }];
                      return false;
                    } else {
                      if (data2 < 0 || isNaN(data2)) {
                        validate11.errors = [{
                          instancePath: instancePath + "/decimals",
                          schemaPath: "#/properties/decimals/minimum",
                          keyword: "minimum",
                          params: {
                            comparison: ">=",
                            limit: 0
                          },
                          message: "must be >= 0"
                        }];
                        return false;
                      }
                    }
                  }
                }
                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.name !== undefined) {
                  let data3 = data.name;
                  const _errs8 = errors;
                  if (errors === _errs8) {
                    if (typeof data3 === "string") {
                      if (func2(data3) > 40) {
                        validate11.errors = [{
                          instancePath: instancePath + "/name",
                          schemaPath: "#/properties/name/maxLength",
                          keyword: "maxLength",
                          params: {
                            limit: 40
                          },
                          message: "must NOT have more than 40 characters"
                        }];
                        return false;
                      } else {
                        if (func2(data3) < 1) {
                          validate11.errors = [{
                            instancePath: instancePath + "/name",
                            schemaPath: "#/properties/name/minLength",
                            keyword: "minLength",
                            params: {
                              limit: 1
                            },
                            message: "must NOT have fewer than 1 characters"
                          }];
                          return false;
                        } else {
                          if (!pattern2.test(data3)) {
                            validate11.errors = [{
                              instancePath: instancePath + "/name",
                              schemaPath: "#/properties/name/pattern",
                              keyword: "pattern",
                              params: {
                                pattern: "^[ \\w.'+\\-%/À-ÖØ-öø-ÿ:&\\[\\]\\(\\)]+$"
                              },
                              message: "must match pattern \"" + "^[ \\w.'+\\-%/À-ÖØ-öø-ÿ:&\\[\\]\\(\\)]+$" + "\""
                            }];
                            return false;
                          }
                        }
                      }
                    } else {
                      validate11.errors = [{
                        instancePath: instancePath + "/name",
                        schemaPath: "#/properties/name/type",
                        keyword: "type",
                        params: {
                          type: "string"
                        },
                        message: "must be string"
                      }];
                      return false;
                    }
                  }
                  var valid0 = _errs8 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.symbol !== undefined) {
                    let data4 = data.symbol;
                    const _errs10 = errors;
                    if (errors === _errs10) {
                      if (typeof data4 === "string") {
                        if (func2(data4) > 20) {
                          validate11.errors = [{
                            instancePath: instancePath + "/symbol",
                            schemaPath: "#/properties/symbol/maxLength",
                            keyword: "maxLength",
                            params: {
                              limit: 20
                            },
                            message: "must NOT have more than 20 characters"
                          }];
                          return false;
                        } else {
                          if (func2(data4) < 1) {
                            validate11.errors = [{
                              instancePath: instancePath + "/symbol",
                              schemaPath: "#/properties/symbol/minLength",
                              keyword: "minLength",
                              params: {
                                limit: 1
                              },
                              message: "must NOT have fewer than 1 characters"
                            }];
                            return false;
                          } else {
                            if (!pattern3.test(data4)) {
                              validate11.errors = [{
                                instancePath: instancePath + "/symbol",
                                schemaPath: "#/properties/symbol/pattern",
                                keyword: "pattern",
                                params: {
                                  pattern: "^[a-zA-Z0-9+\\-%/$.]+$"
                                },
                                message: "must match pattern \"" + "^[a-zA-Z0-9+\\-%/$.]+$" + "\""
                              }];
                              return false;
                            }
                          }
                        }
                      } else {
                        validate11.errors = [{
                          instancePath: instancePath + "/symbol",
                          schemaPath: "#/properties/symbol/type",
                          keyword: "type",
                          params: {
                            type: "string"
                          },
                          message: "must be string"
                        }];
                        return false;
                      }
                    }
                    var valid0 = _errs10 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.logoURI !== undefined) {
                      let data5 = data.logoURI;
                      const _errs12 = errors;
                      if (errors === _errs12) {
                        if (errors === _errs12) {
                          if (typeof data5 === "string") {
                            if (!formats2(data5)) {
                              validate11.errors = [{
                                instancePath: instancePath + "/logoURI",
                                schemaPath: "#/properties/logoURI/format",
                                keyword: "format",
                                params: {
                                  format: "uri"
                                },
                                message: "must match format \"" + "uri" + "\""
                              }];
                              return false;
                            }
                          } else {
                            validate11.errors = [{
                              instancePath: instancePath + "/logoURI",
                              schemaPath: "#/properties/logoURI/type",
                              keyword: "type",
                              params: {
                                type: "string"
                              },
                              message: "must be string"
                            }];
                            return false;
                          }
                        }
                      }
                      var valid0 = _errs12 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.tags !== undefined) {
                        let data6 = data.tags;
                        const _errs14 = errors;
                        if (errors === _errs14) {
                          if (Array.isArray(data6)) {
                            if (data6.length > 10) {
                              validate11.errors = [{
                                instancePath: instancePath + "/tags",
                                schemaPath: "#/properties/tags/maxItems",
                                keyword: "maxItems",
                                params: {
                                  limit: 10
                                },
                                message: "must NOT have more than 10 items"
                              }];
                              return false;
                            } else {
                              var valid1 = true;
                              const len0 = data6.length;
                              for (let i0 = 0; i0 < len0; i0++) {
                                let data7 = data6[i0];
                                const _errs16 = errors;
                                const _errs17 = errors;
                                if (errors === _errs17) {
                                  if (typeof data7 === "string") {
                                    if (func2(data7) > 10) {
                                      validate11.errors = [{
                                        instancePath: instancePath + "/tags/" + i0,
                                        schemaPath: "#/definitions/TagIdentifier/maxLength",
                                        keyword: "maxLength",
                                        params: {
                                          limit: 10
                                        },
                                        message: "must NOT have more than 10 characters"
                                      }];
                                      return false;
                                    } else {
                                      if (func2(data7) < 1) {
                                        validate11.errors = [{
                                          instancePath: instancePath + "/tags/" + i0,
                                          schemaPath: "#/definitions/TagIdentifier/minLength",
                                          keyword: "minLength",
                                          params: {
                                            limit: 1
                                          },
                                          message: "must NOT have fewer than 1 characters"
                                        }];
                                        return false;
                                      } else {
                                        if (!pattern4.test(data7)) {
                                          validate11.errors = [{
                                            instancePath: instancePath + "/tags/" + i0,
                                            schemaPath: "#/definitions/TagIdentifier/pattern",
                                            keyword: "pattern",
                                            params: {
                                              pattern: "^[\\w]+$"
                                            },
                                            message: "must match pattern \"" + "^[\\w]+$" + "\""
                                          }];
                                          return false;
                                        }
                                      }
                                    }
                                  } else {
                                    validate11.errors = [{
                                      instancePath: instancePath + "/tags/" + i0,
                                      schemaPath: "#/definitions/TagIdentifier/type",
                                      keyword: "type",
                                      params: {
                                        type: "string"
                                      },
                                      message: "must be string"
                                    }];
                                    return false;
                                  }
                                }
                                var valid1 = _errs16 === errors;
                                if (!valid1) {
                                  break;
                                }
                              }
                            }
                          } else {
                            validate11.errors = [{
                              instancePath: instancePath + "/tags",
                              schemaPath: "#/properties/tags/type",
                              keyword: "type",
                              params: {
                                type: "array"
                              },
                              message: "must be array"
                            }];
                            return false;
                          }
                        }
                        var valid0 = _errs14 === errors;
                      } else {
                        var valid0 = true;
                      }
                      if (valid0) {
                        if (data.extensions !== undefined) {
                          const _errs19 = errors;
                          if (!validate12(data.extensions, {
                            instancePath: instancePath + "/extensions",
                            parentData: data,
                            parentDataProperty: "extensions",
                            rootData
                          })) {
                            vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
                            errors = vErrors.length;
                          }
                          var valid0 = _errs19 === errors;
                        } else {
                          var valid0 = true;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate11.errors = [{
        instancePath,
        schemaPath: "#/type",
        keyword: "type",
        params: {
          type: "object"
        },
        message: "must be object"
      }];
      return false;
    }
  }
  validate11.errors = vErrors;
  return errors === 0;
}
function validate10(data) {
  let {
    instancePath = "",
    parentData,
    parentDataProperty,
    rootData = data
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.tokens === undefined && (missing0 = "tokens")) {
        validate10.errors = [{
          instancePath,
          schemaPath: "#/required",
          keyword: "required",
          params: {
            missingProperty: missing0
          },
          message: "must have required property '" + missing0 + "'"
        }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "name" || key0 === "timestamp" || key0 === "version" || key0 === "tokens" || key0 === "keywords" || key0 === "tags" || key0 === "logoURI")) {
            validate10.errors = [{
              instancePath,
              schemaPath: "#/additionalProperties",
              keyword: "additionalProperties",
              params: {
                additionalProperty: key0
              },
              message: "must NOT have additional properties"
            }];
            return false;
          }
        }
        if (_errs1 === errors) {
          if (data.name !== undefined) {
            let data0 = data.name;
            const _errs2 = errors;
            if (errors === _errs2) {
              if (typeof data0 === "string") {
                if (func2(data0) > 30) {
                  validate10.errors = [{
                    instancePath: instancePath + "/name",
                    schemaPath: "#/properties/name/maxLength",
                    keyword: "maxLength",
                    params: {
                      limit: 30
                    },
                    message: "must NOT have more than 30 characters"
                  }];
                  return false;
                } else {
                  if (func2(data0) < 1) {
                    validate10.errors = [{
                      instancePath: instancePath + "/name",
                      schemaPath: "#/properties/name/minLength",
                      keyword: "minLength",
                      params: {
                        limit: 1
                      },
                      message: "must NOT have fewer than 1 characters"
                    }];
                    return false;
                  } else {
                    if (!pattern0.test(data0)) {
                      validate10.errors = [{
                        instancePath: instancePath + "/name",
                        schemaPath: "#/properties/name/pattern",
                        keyword: "pattern",
                        params: {
                          pattern: "^[\\w ]+$"
                        },
                        message: "must match pattern \"" + "^[\\w ]+$" + "\""
                      }];
                      return false;
                    }
                  }
                }
              } else {
                validate10.errors = [{
                  instancePath: instancePath + "/name",
                  schemaPath: "#/properties/name/type",
                  keyword: "type",
                  params: {
                    type: "string"
                  },
                  message: "must be string"
                }];
                return false;
              }
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.timestamp !== undefined) {
              let data1 = data.timestamp;
              const _errs4 = errors;
              if (errors === _errs4) {
                if (errors === _errs4) {
                  if (typeof data1 === "string") {
                    if (!formats0.validate(data1)) {
                      validate10.errors = [{
                        instancePath: instancePath + "/timestamp",
                        schemaPath: "#/properties/timestamp/format",
                        keyword: "format",
                        params: {
                          format: "date-time"
                        },
                        message: "must match format \"" + "date-time" + "\""
                      }];
                      return false;
                    }
                  } else {
                    validate10.errors = [{
                      instancePath: instancePath + "/timestamp",
                      schemaPath: "#/properties/timestamp/type",
                      keyword: "type",
                      params: {
                        type: "string"
                      },
                      message: "must be string"
                    }];
                    return false;
                  }
                }
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.version !== undefined) {
                let data2 = data.version;
                const _errs6 = errors;
                const _errs7 = errors;
                if (errors === _errs7) {
                  if (data2 && typeof data2 == "object" && !Array.isArray(data2)) {
                    let missing1;
                    if (data2.major === undefined && (missing1 = "major") || data2.minor === undefined && (missing1 = "minor") || data2.patch === undefined && (missing1 = "patch")) {
                      validate10.errors = [{
                        instancePath: instancePath + "/version",
                        schemaPath: "#/definitions/Version/required",
                        keyword: "required",
                        params: {
                          missingProperty: missing1
                        },
                        message: "must have required property '" + missing1 + "'"
                      }];
                      return false;
                    } else {
                      const _errs9 = errors;
                      for (const key1 in data2) {
                        if (!(key1 === "major" || key1 === "minor" || key1 === "patch")) {
                          validate10.errors = [{
                            instancePath: instancePath + "/version",
                            schemaPath: "#/definitions/Version/additionalProperties",
                            keyword: "additionalProperties",
                            params: {
                              additionalProperty: key1
                            },
                            message: "must NOT have additional properties"
                          }];
                          return false;
                        }
                      }
                      if (_errs9 === errors) {
                        if (data2.major !== undefined) {
                          let data3 = data2.major;
                          const _errs10 = errors;
                          if (!(typeof data3 == "number" && !(data3 % 1) && !isNaN(data3) && isFinite(data3))) {
                            validate10.errors = [{
                              instancePath: instancePath + "/version/major",
                              schemaPath: "#/definitions/Version/properties/major/type",
                              keyword: "type",
                              params: {
                                type: "integer"
                              },
                              message: "must be integer"
                            }];
                            return false;
                          }
                          if (errors === _errs10) {
                            if (typeof data3 == "number" && isFinite(data3)) {
                              if (data3 < 0 || isNaN(data3)) {
                                validate10.errors = [{
                                  instancePath: instancePath + "/version/major",
                                  schemaPath: "#/definitions/Version/properties/major/minimum",
                                  keyword: "minimum",
                                  params: {
                                    comparison: ">=",
                                    limit: 0
                                  },
                                  message: "must be >= 0"
                                }];
                                return false;
                              }
                            }
                          }
                          var valid2 = _errs10 === errors;
                        } else {
                          var valid2 = true;
                        }
                        if (valid2) {
                          if (data2.minor !== undefined) {
                            let data4 = data2.minor;
                            const _errs12 = errors;
                            if (!(typeof data4 == "number" && !(data4 % 1) && !isNaN(data4) && isFinite(data4))) {
                              validate10.errors = [{
                                instancePath: instancePath + "/version/minor",
                                schemaPath: "#/definitions/Version/properties/minor/type",
                                keyword: "type",
                                params: {
                                  type: "integer"
                                },
                                message: "must be integer"
                              }];
                              return false;
                            }
                            if (errors === _errs12) {
                              if (typeof data4 == "number" && isFinite(data4)) {
                                if (data4 < 0 || isNaN(data4)) {
                                  validate10.errors = [{
                                    instancePath: instancePath + "/version/minor",
                                    schemaPath: "#/definitions/Version/properties/minor/minimum",
                                    keyword: "minimum",
                                    params: {
                                      comparison: ">=",
                                      limit: 0
                                    },
                                    message: "must be >= 0"
                                  }];
                                  return false;
                                }
                              }
                            }
                            var valid2 = _errs12 === errors;
                          } else {
                            var valid2 = true;
                          }
                          if (valid2) {
                            if (data2.patch !== undefined) {
                              let data5 = data2.patch;
                              const _errs14 = errors;
                              if (!(typeof data5 == "number" && !(data5 % 1) && !isNaN(data5) && isFinite(data5))) {
                                validate10.errors = [{
                                  instancePath: instancePath + "/version/patch",
                                  schemaPath: "#/definitions/Version/properties/patch/type",
                                  keyword: "type",
                                  params: {
                                    type: "integer"
                                  },
                                  message: "must be integer"
                                }];
                                return false;
                              }
                              if (errors === _errs14) {
                                if (typeof data5 == "number" && isFinite(data5)) {
                                  if (data5 < 0 || isNaN(data5)) {
                                    validate10.errors = [{
                                      instancePath: instancePath + "/version/patch",
                                      schemaPath: "#/definitions/Version/properties/patch/minimum",
                                      keyword: "minimum",
                                      params: {
                                        comparison: ">=",
                                        limit: 0
                                      },
                                      message: "must be >= 0"
                                    }];
                                    return false;
                                  }
                                }
                              }
                              var valid2 = _errs14 === errors;
                            } else {
                              var valid2 = true;
                            }
                          }
                        }
                      }
                    }
                  } else {
                    validate10.errors = [{
                      instancePath: instancePath + "/version",
                      schemaPath: "#/definitions/Version/type",
                      keyword: "type",
                      params: {
                        type: "object"
                      },
                      message: "must be object"
                    }];
                    return false;
                  }
                }
                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.tokens !== undefined) {
                  let data6 = data.tokens;
                  const _errs16 = errors;
                  if (errors === _errs16) {
                    if (Array.isArray(data6)) {
                      if (data6.length > 10000) {
                        validate10.errors = [{
                          instancePath: instancePath + "/tokens",
                          schemaPath: "#/properties/tokens/maxItems",
                          keyword: "maxItems",
                          params: {
                            limit: 10000
                          },
                          message: "must NOT have more than 10000 items"
                        }];
                        return false;
                      } else {
                        if (data6.length < 1) {
                          validate10.errors = [{
                            instancePath: instancePath + "/tokens",
                            schemaPath: "#/properties/tokens/minItems",
                            keyword: "minItems",
                            params: {
                              limit: 1
                            },
                            message: "must NOT have fewer than 1 items"
                          }];
                          return false;
                        } else {
                          var valid3 = true;
                          const len0 = data6.length;
                          for (let i0 = 0; i0 < len0; i0++) {
                            const _errs18 = errors;
                            if (!validate11(data6[i0], {
                              instancePath: instancePath + "/tokens/" + i0,
                              parentData: data6,
                              parentDataProperty: i0,
                              rootData
                            })) {
                              vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
                              errors = vErrors.length;
                            }
                            var valid3 = _errs18 === errors;
                            if (!valid3) {
                              break;
                            }
                          }
                        }
                      }
                    } else {
                      validate10.errors = [{
                        instancePath: instancePath + "/tokens",
                        schemaPath: "#/properties/tokens/type",
                        keyword: "type",
                        params: {
                          type: "array"
                        },
                        message: "must be array"
                      }];
                      return false;
                    }
                  }
                  var valid0 = _errs16 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.keywords !== undefined) {
                    let data8 = data.keywords;
                    const _errs19 = errors;
                    if (errors === _errs19) {
                      if (Array.isArray(data8)) {
                        if (data8.length > 20) {
                          validate10.errors = [{
                            instancePath: instancePath + "/keywords",
                            schemaPath: "#/properties/keywords/maxItems",
                            keyword: "maxItems",
                            params: {
                              limit: 20
                            },
                            message: "must NOT have more than 20 items"
                          }];
                          return false;
                        } else {
                          var valid4 = true;
                          const len1 = data8.length;
                          for (let i1 = 0; i1 < len1; i1++) {
                            let data9 = data8[i1];
                            const _errs21 = errors;
                            if (errors === _errs21) {
                              if (typeof data9 === "string") {
                                if (func2(data9) > 20) {
                                  validate10.errors = [{
                                    instancePath: instancePath + "/keywords/" + i1,
                                    schemaPath: "#/properties/keywords/items/maxLength",
                                    keyword: "maxLength",
                                    params: {
                                      limit: 20
                                    },
                                    message: "must NOT have more than 20 characters"
                                  }];
                                  return false;
                                } else {
                                  if (func2(data9) < 1) {
                                    validate10.errors = [{
                                      instancePath: instancePath + "/keywords/" + i1,
                                      schemaPath: "#/properties/keywords/items/minLength",
                                      keyword: "minLength",
                                      params: {
                                        limit: 1
                                      },
                                      message: "must NOT have fewer than 1 characters"
                                    }];
                                    return false;
                                  } else {
                                    if (!pattern0.test(data9)) {
                                      validate10.errors = [{
                                        instancePath: instancePath + "/keywords/" + i1,
                                        schemaPath: "#/properties/keywords/items/pattern",
                                        keyword: "pattern",
                                        params: {
                                          pattern: "^[\\w ]+$"
                                        },
                                        message: "must match pattern \"" + "^[\\w ]+$" + "\""
                                      }];
                                      return false;
                                    }
                                  }
                                }
                              } else {
                                validate10.errors = [{
                                  instancePath: instancePath + "/keywords/" + i1,
                                  schemaPath: "#/properties/keywords/items/type",
                                  keyword: "type",
                                  params: {
                                    type: "string"
                                  },
                                  message: "must be string"
                                }];
                                return false;
                              }
                            }
                            var valid4 = _errs21 === errors;
                            if (!valid4) {
                              break;
                            }
                          }
                          if (valid4) {
                            let i2 = data8.length;
                            let j0;
                            if (i2 > 1) {
                              const indices0 = {};
                              for (; i2--;) {
                                let item0 = data8[i2];
                                if (typeof item0 !== "string") {
                                  continue;
                                }
                                if (typeof indices0[item0] == "number") {
                                  j0 = indices0[item0];
                                  validate10.errors = [{
                                    instancePath: instancePath + "/keywords",
                                    schemaPath: "#/properties/keywords/uniqueItems",
                                    keyword: "uniqueItems",
                                    params: {
                                      i: i2,
                                      j: j0
                                    },
                                    message: "must NOT have duplicate items (items ## " + j0 + " and " + i2 + " are identical)"
                                  }];
                                  return false;
                                }
                                indices0[item0] = i2;
                              }
                            }
                          }
                        }
                      } else {
                        validate10.errors = [{
                          instancePath: instancePath + "/keywords",
                          schemaPath: "#/properties/keywords/type",
                          keyword: "type",
                          params: {
                            type: "array"
                          },
                          message: "must be array"
                        }];
                        return false;
                      }
                    }
                    var valid0 = _errs19 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.tags !== undefined) {
                      let data10 = data.tags;
                      const _errs23 = errors;
                      if (errors === _errs23) {
                        if (data10 && typeof data10 == "object" && !Array.isArray(data10)) {
                          if (Object.keys(data10).length > 20) {
                            validate10.errors = [{
                              instancePath: instancePath + "/tags",
                              schemaPath: "#/properties/tags/maxProperties",
                              keyword: "maxProperties",
                              params: {
                                limit: 20
                              },
                              message: "must NOT have more than 20 properties"
                            }];
                            return false;
                          } else {
                            for (const key2 in data10) {
                              const _errs25 = errors;
                              const _errs26 = errors;
                              if (errors === _errs26) {
                                if (typeof key2 === "string") {
                                  if (func2(key2) > 10) {
                                    const err0 = {
                                      instancePath: instancePath + "/tags",
                                      schemaPath: "#/definitions/TagIdentifier/maxLength",
                                      keyword: "maxLength",
                                      params: {
                                        limit: 10
                                      },
                                      message: "must NOT have more than 10 characters",
                                      propertyName: key2
                                    };
                                    if (vErrors === null) {
                                      vErrors = [err0];
                                    } else {
                                      vErrors.push(err0);
                                    }
                                    errors++;
                                  } else {
                                    if (func2(key2) < 1) {
                                      const err1 = {
                                        instancePath: instancePath + "/tags",
                                        schemaPath: "#/definitions/TagIdentifier/minLength",
                                        keyword: "minLength",
                                        params: {
                                          limit: 1
                                        },
                                        message: "must NOT have fewer than 1 characters",
                                        propertyName: key2
                                      };
                                      if (vErrors === null) {
                                        vErrors = [err1];
                                      } else {
                                        vErrors.push(err1);
                                      }
                                      errors++;
                                    } else {
                                      if (!pattern4.test(key2)) {
                                        const err2 = {
                                          instancePath: instancePath + "/tags",
                                          schemaPath: "#/definitions/TagIdentifier/pattern",
                                          keyword: "pattern",
                                          params: {
                                            pattern: "^[\\w]+$"
                                          },
                                          message: "must match pattern \"" + "^[\\w]+$" + "\"",
                                          propertyName: key2
                                        };
                                        if (vErrors === null) {
                                          vErrors = [err2];
                                        } else {
                                          vErrors.push(err2);
                                        }
                                        errors++;
                                      }
                                    }
                                  }
                                } else {
                                  const err3 = {
                                    instancePath: instancePath + "/tags",
                                    schemaPath: "#/definitions/TagIdentifier/type",
                                    keyword: "type",
                                    params: {
                                      type: "string"
                                    },
                                    message: "must be string",
                                    propertyName: key2
                                  };
                                  if (vErrors === null) {
                                    vErrors = [err3];
                                  } else {
                                    vErrors.push(err3);
                                  }
                                  errors++;
                                }
                              }
                              var valid6 = _errs25 === errors;
                              if (!valid6) {
                                const err4 = {
                                  instancePath: instancePath + "/tags",
                                  schemaPath: "#/properties/tags/propertyNames",
                                  keyword: "propertyNames",
                                  params: {
                                    propertyName: key2
                                  },
                                  message: "property name must be valid"
                                };
                                if (vErrors === null) {
                                  vErrors = [err4];
                                } else {
                                  vErrors.push(err4);
                                }
                                errors++;
                                validate10.errors = vErrors;
                                return false;
                              }
                            }
                            if (valid6) {
                              for (const key3 in data10) {
                                let data11 = data10[key3];
                                const _errs29 = errors;
                                const _errs30 = errors;
                                if (errors === _errs30) {
                                  if (data11 && typeof data11 == "object" && !Array.isArray(data11)) {
                                    let missing2;
                                    if (data11.name === undefined && (missing2 = "name") || data11.description === undefined && (missing2 = "description")) {
                                      validate10.errors = [{
                                        instancePath: instancePath + "/tags/" + key3.replace(/~/g, "~0").replace(/\//g, "~1"),
                                        schemaPath: "#/definitions/TagDefinition/required",
                                        keyword: "required",
                                        params: {
                                          missingProperty: missing2
                                        },
                                        message: "must have required property '" + missing2 + "'"
                                      }];
                                      return false;
                                    } else {
                                      const _errs32 = errors;
                                      for (const key4 in data11) {
                                        if (!(key4 === "name" || key4 === "description")) {
                                          validate10.errors = [{
                                            instancePath: instancePath + "/tags/" + key3.replace(/~/g, "~0").replace(/\//g, "~1"),
                                            schemaPath: "#/definitions/TagDefinition/additionalProperties",
                                            keyword: "additionalProperties",
                                            params: {
                                              additionalProperty: key4
                                            },
                                            message: "must NOT have additional properties"
                                          }];
                                          return false;
                                        }
                                      }
                                      if (_errs32 === errors) {
                                        if (data11.name !== undefined) {
                                          let data12 = data11.name;
                                          const _errs33 = errors;
                                          if (errors === _errs33) {
                                            if (typeof data12 === "string") {
                                              if (func2(data12) > 20) {
                                                validate10.errors = [{
                                                  instancePath: instancePath + "/tags/" + key3.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                  schemaPath: "#/definitions/TagDefinition/properties/name/maxLength",
                                                  keyword: "maxLength",
                                                  params: {
                                                    limit: 20
                                                  },
                                                  message: "must NOT have more than 20 characters"
                                                }];
                                                return false;
                                              } else {
                                                if (func2(data12) < 1) {
                                                  validate10.errors = [{
                                                    instancePath: instancePath + "/tags/" + key3.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                    schemaPath: "#/definitions/TagDefinition/properties/name/minLength",
                                                    keyword: "minLength",
                                                    params: {
                                                      limit: 1
                                                    },
                                                    message: "must NOT have fewer than 1 characters"
                                                  }];
                                                  return false;
                                                } else {
                                                  if (!pattern10.test(data12)) {
                                                    validate10.errors = [{
                                                      instancePath: instancePath + "/tags/" + key3.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                      schemaPath: "#/definitions/TagDefinition/properties/name/pattern",
                                                      keyword: "pattern",
                                                      params: {
                                                        pattern: "^[ \\w]+$"
                                                      },
                                                      message: "must match pattern \"" + "^[ \\w]+$" + "\""
                                                    }];
                                                    return false;
                                                  }
                                                }
                                              }
                                            } else {
                                              validate10.errors = [{
                                                instancePath: instancePath + "/tags/" + key3.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                schemaPath: "#/definitions/TagDefinition/properties/name/type",
                                                keyword: "type",
                                                params: {
                                                  type: "string"
                                                },
                                                message: "must be string"
                                              }];
                                              return false;
                                            }
                                          }
                                          var valid10 = _errs33 === errors;
                                        } else {
                                          var valid10 = true;
                                        }
                                        if (valid10) {
                                          if (data11.description !== undefined) {
                                            let data13 = data11.description;
                                            const _errs35 = errors;
                                            if (errors === _errs35) {
                                              if (typeof data13 === "string") {
                                                if (func2(data13) > 200) {
                                                  validate10.errors = [{
                                                    instancePath: instancePath + "/tags/" + key3.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                    schemaPath: "#/definitions/TagDefinition/properties/description/maxLength",
                                                    keyword: "maxLength",
                                                    params: {
                                                      limit: 200
                                                    },
                                                    message: "must NOT have more than 200 characters"
                                                  }];
                                                  return false;
                                                } else {
                                                  if (func2(data13) < 1) {
                                                    validate10.errors = [{
                                                      instancePath: instancePath + "/tags/" + key3.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                      schemaPath: "#/definitions/TagDefinition/properties/description/minLength",
                                                      keyword: "minLength",
                                                      params: {
                                                        limit: 1
                                                      },
                                                      message: "must NOT have fewer than 1 characters"
                                                    }];
                                                    return false;
                                                  } else {
                                                    if (!pattern11.test(data13)) {
                                                      validate10.errors = [{
                                                        instancePath: instancePath + "/tags/" + key3.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                        schemaPath: "#/definitions/TagDefinition/properties/description/pattern",
                                                        keyword: "pattern",
                                                        params: {
                                                          pattern: "^[ \\w\\.,:]+$"
                                                        },
                                                        message: "must match pattern \"" + "^[ \\w\\.,:]+$" + "\""
                                                      }];
                                                      return false;
                                                    }
                                                  }
                                                }
                                              } else {
                                                validate10.errors = [{
                                                  instancePath: instancePath + "/tags/" + key3.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                  schemaPath: "#/definitions/TagDefinition/properties/description/type",
                                                  keyword: "type",
                                                  params: {
                                                    type: "string"
                                                  },
                                                  message: "must be string"
                                                }];
                                                return false;
                                              }
                                            }
                                            var valid10 = _errs35 === errors;
                                          } else {
                                            var valid10 = true;
                                          }
                                        }
                                      }
                                    }
                                  } else {
                                    validate10.errors = [{
                                      instancePath: instancePath + "/tags/" + key3.replace(/~/g, "~0").replace(/\//g, "~1"),
                                      schemaPath: "#/definitions/TagDefinition/type",
                                      keyword: "type",
                                      params: {
                                        type: "object"
                                      },
                                      message: "must be object"
                                    }];
                                    return false;
                                  }
                                }
                                var valid8 = _errs29 === errors;
                                if (!valid8) {
                                  break;
                                }
                              }
                            }
                          }
                        } else {
                          validate10.errors = [{
                            instancePath: instancePath + "/tags",
                            schemaPath: "#/properties/tags/type",
                            keyword: "type",
                            params: {
                              type: "object"
                            },
                            message: "must be object"
                          }];
                          return false;
                        }
                      }
                      var valid0 = _errs23 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.logoURI !== undefined) {
                        let data14 = data.logoURI;
                        const _errs37 = errors;
                        if (errors === _errs37) {
                          if (errors === _errs37) {
                            if (typeof data14 === "string") {
                              if (!formats2(data14)) {
                                validate10.errors = [{
                                  instancePath: instancePath + "/logoURI",
                                  schemaPath: "#/properties/logoURI/format",
                                  keyword: "format",
                                  params: {
                                    format: "uri"
                                  },
                                  message: "must match format \"" + "uri" + "\""
                                }];
                                return false;
                              }
                            } else {
                              validate10.errors = [{
                                instancePath: instancePath + "/logoURI",
                                schemaPath: "#/properties/logoURI/type",
                                keyword: "type",
                                params: {
                                  type: "string"
                                },
                                message: "must be string"
                              }];
                              return false;
                            }
                          }
                        }
                        var valid0 = _errs37 === errors;
                      } else {
                        var valid0 = true;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate10.errors = [{
        instancePath,
        schemaPath: "#/type",
        keyword: "type",
        params: {
          type: "object"
        },
        message: "must be object"
      }];
      return false;
    }
  }
  validate10.errors = vErrors;
  return errors === 0;
}

export { validate10 as default, validate };
