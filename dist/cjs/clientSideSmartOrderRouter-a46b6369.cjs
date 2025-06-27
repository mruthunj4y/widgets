'use strict';

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var sdkCore = require('@surge/sdk-core');
var smartOrderRouter = require('@surge/smart-order-router');
var index = require('./index-a289787a.cjs');
var JSBI = require('jsbi');
var routerSdk = require('@surge/router-sdk');
require('react');
require('buffer');
require('@babel/runtime/helpers/extends');
require('@babel/runtime/helpers/taggedTemplateLiteral');
require('styled-components');
require('react-feather');
require('polished');
require('wcag-contrast');
require('rebass');
require('@web3-react/core');
require('@babel/runtime/helpers/objectWithoutProperties');
require('@reduxjs/toolkit/query/react');
require('jotai/immer');
require('jotai/utils');
require('tiny-invariant');
require('@ethersproject/units');
require('@reduxjs/toolkit');
require('jotai');
require('@surge/v2-sdk');
require('@surge/v3-sdk');
require('qs');
require('@ethersproject/abi');
require('@surge/redux-multicall');
require('@ethersproject/address');
require('@ethersproject/constants');
require('@ethersproject/contracts');
require('@ethersproject/hash');
require('@ethersproject/bignumber');
require('@surge/conedison/provider/signing');
require('@surge/conedison/format');
require('@ethersproject/bytes');
require('@ethersproject/strings');
require('popper-max-size-modifier');
require('react-dom');
require('react-popper');
require('cids');
require('multicodec');
require('multihashes');
require('wicg-inert');
require('node-vibrant/lib/bundle.js');
require('setimmediate');
require('react-virtualized-auto-sizer');
require('react-window');
require('@web3-react/walletconnect');
require('qrcode');
require('ethers/lib/utils');
require('@surge/conedison/provider/index');
require('@surge/universal-router-sdk');
require('@ethersproject/providers');
require('@web3-react/eip1193');
require('@web3-react/metamask');
require('@web3-react/network');
require('@web3-react/types');
require('make-plural/plurals');
require('react-redux');
require('redux');
require('resize-observer-polyfill');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var JSBI__default = /*#__PURE__*/_interopDefaultLegacy(JSBI);

// from routing-api (https://github.com/Uniswap/routing-api/blob/main/lib/handlers/quote/quote.ts#L243-L311)
function transformSwapRouteToGetQuoteResult(_ref) {
  let {
    quote,
    quoteGasAdjusted,
    route,
    routeString,
    estimatedGasUsed,
    estimatedGasUsedQuoteToken,
    estimatedGasUsedUSD,
    gasPriceWei,
    methodParameters,
    blockNumber,
    trade: {
      tradeType,
      inputAmount,
      outputAmount
    }
  } = _ref;
  const routeResponse = [];
  for (const subRoute of route) {
    const {
      amount,
      quote,
      tokenPath
    } = subRoute;
    if (subRoute.protocol === routerSdk.Protocol.V3) {
      const pools = subRoute.route.pools;
      const curRoute = [];
      for (let i = 0; i < pools.length; i++) {
        const nextPool = pools[i];
        const tokenIn = tokenPath[i];
        const tokenOut = tokenPath[i + 1];
        let edgeAmountIn = undefined;
        if (i === 0) {
          edgeAmountIn = index.isExactInput(tradeType) ? amount.quotient.toString() : quote.quotient.toString();
        }
        let edgeAmountOut = undefined;
        if (i === pools.length - 1) {
          edgeAmountOut = index.isExactInput(tradeType) ? quote.quotient.toString() : amount.quotient.toString();
        }
        curRoute.push({
          type: 'v3-pool',
          tokenIn: {
            chainId: tokenIn.chainId,
            decimals: tokenIn.decimals,
            address: tokenIn instanceof sdkCore.Token ? tokenIn.address : tokenIn.wrapped.address,
            symbol: tokenIn.symbol
          },
          tokenOut: {
            chainId: tokenOut.chainId,
            decimals: tokenOut.decimals,
            address: tokenOut instanceof sdkCore.Token ? tokenOut.address : tokenOut.wrapped.address,
            symbol: tokenOut.symbol
          },
          fee: nextPool.fee.toString(),
          liquidity: nextPool.liquidity.toString(),
          sqrtRatioX96: nextPool.sqrtRatioX96.toString(),
          tickCurrent: nextPool.tickCurrent.toString(),
          amountIn: edgeAmountIn,
          amountOut: edgeAmountOut
        });
      }
      routeResponse.push(curRoute);
    } else if (subRoute.protocol === routerSdk.Protocol.V2) {
      const pools = subRoute.route.pairs;
      const curRoute = [];
      for (let i = 0; i < pools.length; i++) {
        const nextPool = pools[i];
        const tokenIn = tokenPath[i];
        const tokenOut = tokenPath[i + 1];
        let edgeAmountIn = undefined;
        if (i === 0) {
          edgeAmountIn = index.isExactInput(tradeType) ? amount.quotient.toString() : quote.quotient.toString();
        }
        let edgeAmountOut = undefined;
        if (i === pools.length - 1) {
          edgeAmountOut = index.isExactInput(tradeType) ? quote.quotient.toString() : amount.quotient.toString();
        }
        const reserve0 = nextPool.reserve0;
        const reserve1 = nextPool.reserve1;
        curRoute.push({
          type: 'v2-pool',
          tokenIn: {
            chainId: tokenIn.chainId,
            decimals: tokenIn.decimals,
            address: tokenIn instanceof sdkCore.Token ? tokenIn.address : tokenIn.wrapped.address,
            symbol: tokenIn.symbol
          },
          tokenOut: {
            chainId: tokenOut.chainId,
            decimals: tokenOut.decimals,
            address: tokenOut instanceof sdkCore.Token ? tokenOut.address : tokenOut.wrapped.address,
            symbol: tokenOut.symbol
          },
          reserve0: {
            token: {
              chainId: reserve0.currency.wrapped.chainId,
              decimals: reserve0.currency.wrapped.decimals,
              address: reserve0.currency.wrapped.address,
              symbol: reserve0.currency.wrapped.symbol
            },
            quotient: reserve0.quotient.toString()
          },
          reserve1: {
            token: {
              chainId: reserve1.currency.wrapped.chainId,
              decimals: reserve1.currency.wrapped.decimals,
              address: reserve1.currency.wrapped.address,
              symbol: reserve1.currency.wrapped.symbol
            },
            quotient: reserve1.quotient.toString()
          },
          amountIn: edgeAmountIn,
          amountOut: edgeAmountOut
        });
      }
      routeResponse.push(curRoute);
    }
  }
  const amount = index.isExactInput(tradeType) ? inputAmount : outputAmount;
  return {
    state: index.QuoteState.SUCCESS,
    data: {
      methodParameters,
      blockNumber: blockNumber.toString(),
      amount: amount.quotient.toString(),
      amountDecimals: amount.toExact(),
      quote: quote.quotient.toString(),
      quoteDecimals: quote.toExact(),
      quoteGasAdjusted: quoteGasAdjusted.quotient.toString(),
      quoteGasAdjustedDecimals: quoteGasAdjusted.toExact(),
      gasUseEstimateQuote: estimatedGasUsedQuoteToken.quotient.toString(),
      gasUseEstimateQuoteDecimals: estimatedGasUsedQuoteToken.toExact(),
      gasUseEstimate: estimatedGasUsed.toString(),
      gasUseEstimateUSD: estimatedGasUsedUSD.toExact(),
      gasPriceWei: gasPriceWei.toString(),
      route: routeResponse,
      routeString
    }
  };
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const AUTO_ROUTER_SUPPORTED_CHAINS = Object.values(sdkCore.ChainId).filter(chainId => Number.isInteger(chainId));
function isAutoRouterSupportedChain(chainId) {
  return Boolean(chainId && AUTO_ROUTER_SUPPORTED_CHAINS.includes(chainId));
}

/** A cache of AlphaRouters, which must be initialized to a specific chain/provider. */
const routersCache = new WeakMap();
function getRouter(chainId, provider) {
  const routers = routersCache.get(provider) || {};
  const cached = routers[chainId];
  if (cached) return cached;

  // Only support XRPL_EVM_TESTNET
  const router = new smartOrderRouter.AlphaRouter({
    chainId,
    provider
  });
  routers[chainId] = router;
  routersCache.set(provider, routers);
  return router;
}
async function getQuoteResult(_ref, router, routerConfig) {
  let {
    tradeType,
    tokenIn,
    tokenOut,
    amount: amountRaw
  } = _ref;
  const tokenInIsNative = Object.values(index.SwapRouterNativeAssets).includes(tokenIn.address);
  const tokenOutIsNative = Object.values(index.SwapRouterNativeAssets).includes(tokenOut.address);
  const currencyIn = tokenInIsNative ? index.nativeOnChain(tokenIn.chainId) : new sdkCore.Token(tokenIn.chainId, tokenIn.address, tokenIn.decimals, tokenIn.symbol);
  const currencyOut = tokenOutIsNative ? index.nativeOnChain(tokenOut.chainId) : new sdkCore.Token(tokenOut.chainId, tokenOut.address, tokenOut.decimals, tokenOut.symbol);
  const baseCurrency = index.isExactInput(tradeType) ? currencyIn : currencyOut;
  const quoteCurrency = index.isExactInput(tradeType) ? currencyOut : currencyIn;
  const amount = sdkCore.CurrencyAmount.fromRawAmount(baseCurrency, JSBI__default["default"].BigInt(amountRaw !== null && amountRaw !== void 0 ? amountRaw : '1')); // a null amountRaw should initialize the route
  const route = await router.route(amount, quoteCurrency, tradeType, /*swapConfig=*/undefined, routerConfig);
  if (!amountRaw) return {
    state: index.QuoteState.INITIALIZED
  };
  if (!route) return {
    state: index.QuoteState.NOT_FOUND
  };
  return transformSwapRouteToGetQuoteResult(_objectSpread(_objectSpread({}, route), {}, {
    routeString: smartOrderRouter.routeAmountsToString(route.route)
  }));
}
async function getClientSideQuoteResult(_ref2, routerConfig) {
  let {
    tokenInAddress,
    tokenInChainId,
    tokenInDecimals,
    tokenInSymbol,
    tokenOutAddress,
    tokenOutChainId,
    tokenOutDecimals,
    tokenOutSymbol,
    amount,
    tradeType,
    provider
  } = _ref2;
  if (!isAutoRouterSupportedChain(tokenInChainId)) {
    throw new Error("Router does not support this token's chain (chainId: ".concat(tokenInChainId, ")."));
  }
  const router = getRouter(tokenInChainId, provider);
  return getQuoteResult({
    tradeType,
    tokenIn: {
      address: tokenInAddress,
      chainId: tokenInChainId,
      decimals: tokenInDecimals,
      symbol: tokenInSymbol
    },
    tokenOut: {
      address: tokenOutAddress,
      chainId: tokenOutChainId,
      decimals: tokenOutDecimals,
      symbol: tokenOutSymbol
    },
    amount
  }, router, routerConfig);
}

exports.getClientSideQuoteResult = getClientSideQuoteResult;
