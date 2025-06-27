import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { Token, ChainId, CurrencyAmount } from '@surge/sdk-core';
import { AlphaRouter, routeAmountsToString } from '@surge/smart-order-router';
import { i as isExactInput, Q as QuoteState, S as SwapRouterNativeAssets, n as nativeOnChain } from './index-97c10081.js';
import JSBI from 'jsbi';
import { Protocol } from '@surge/router-sdk';
import 'react';
import 'buffer';
import '@babel/runtime/helpers/extends';
import '@babel/runtime/helpers/taggedTemplateLiteral';
import 'styled-components';
import 'react-feather';
import 'polished';
import 'wcag-contrast';
import 'rebass';
import '@web3-react/core';
import '@babel/runtime/helpers/objectWithoutProperties';
import '@reduxjs/toolkit/query/react';
import 'jotai/immer';
import 'jotai/utils';
import 'tiny-invariant';
import '@ethersproject/units';
import '@reduxjs/toolkit';
import 'jotai';
import '@surge/v2-sdk';
import '@surge/v3-sdk';
import 'qs';
import '@ethersproject/abi';
import '@surge/redux-multicall';
import '@ethersproject/address';
import '@ethersproject/constants';
import '@ethersproject/contracts';
import '@ethersproject/hash';
import '@ethersproject/bignumber';
import '@surge/conedison/provider/signing';
import '@surge/conedison/format';
import '@ethersproject/bytes';
import '@ethersproject/strings';
import 'popper-max-size-modifier';
import 'react-dom';
import 'react-popper';
import 'cids';
import 'multicodec';
import 'multihashes';
import 'wicg-inert';
import 'node-vibrant/lib/bundle.js';
import 'setimmediate';
import 'react-virtualized-auto-sizer';
import 'react-window';
import '@web3-react/walletconnect';
import 'qrcode';
import 'ethers/lib/utils';
import '@surge/conedison/provider/index';
import '@surge/universal-router-sdk';
import '@ethersproject/providers';
import '@web3-react/eip1193';
import '@web3-react/metamask';
import '@web3-react/network';
import '@web3-react/types';
import 'make-plural/plurals';
import 'react-redux';
import 'redux';
import 'resize-observer-polyfill';

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
    if (subRoute.protocol === Protocol.V3) {
      const pools = subRoute.route.pools;
      const curRoute = [];
      for (let i = 0; i < pools.length; i++) {
        const nextPool = pools[i];
        const tokenIn = tokenPath[i];
        const tokenOut = tokenPath[i + 1];
        let edgeAmountIn = undefined;
        if (i === 0) {
          edgeAmountIn = isExactInput(tradeType) ? amount.quotient.toString() : quote.quotient.toString();
        }
        let edgeAmountOut = undefined;
        if (i === pools.length - 1) {
          edgeAmountOut = isExactInput(tradeType) ? quote.quotient.toString() : amount.quotient.toString();
        }
        curRoute.push({
          type: 'v3-pool',
          tokenIn: {
            chainId: tokenIn.chainId,
            decimals: tokenIn.decimals,
            address: tokenIn instanceof Token ? tokenIn.address : tokenIn.wrapped.address,
            symbol: tokenIn.symbol
          },
          tokenOut: {
            chainId: tokenOut.chainId,
            decimals: tokenOut.decimals,
            address: tokenOut instanceof Token ? tokenOut.address : tokenOut.wrapped.address,
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
    } else if (subRoute.protocol === Protocol.V2) {
      const pools = subRoute.route.pairs;
      const curRoute = [];
      for (let i = 0; i < pools.length; i++) {
        const nextPool = pools[i];
        const tokenIn = tokenPath[i];
        const tokenOut = tokenPath[i + 1];
        let edgeAmountIn = undefined;
        if (i === 0) {
          edgeAmountIn = isExactInput(tradeType) ? amount.quotient.toString() : quote.quotient.toString();
        }
        let edgeAmountOut = undefined;
        if (i === pools.length - 1) {
          edgeAmountOut = isExactInput(tradeType) ? quote.quotient.toString() : amount.quotient.toString();
        }
        const reserve0 = nextPool.reserve0;
        const reserve1 = nextPool.reserve1;
        curRoute.push({
          type: 'v2-pool',
          tokenIn: {
            chainId: tokenIn.chainId,
            decimals: tokenIn.decimals,
            address: tokenIn instanceof Token ? tokenIn.address : tokenIn.wrapped.address,
            symbol: tokenIn.symbol
          },
          tokenOut: {
            chainId: tokenOut.chainId,
            decimals: tokenOut.decimals,
            address: tokenOut instanceof Token ? tokenOut.address : tokenOut.wrapped.address,
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
  const amount = isExactInput(tradeType) ? inputAmount : outputAmount;
  return {
    state: QuoteState.SUCCESS,
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
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const AUTO_ROUTER_SUPPORTED_CHAINS = Object.values(ChainId).filter(chainId => Number.isInteger(chainId));
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
  const router = new AlphaRouter({
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
  const tokenInIsNative = Object.values(SwapRouterNativeAssets).includes(tokenIn.address);
  const tokenOutIsNative = Object.values(SwapRouterNativeAssets).includes(tokenOut.address);
  const currencyIn = tokenInIsNative ? nativeOnChain(tokenIn.chainId) : new Token(tokenIn.chainId, tokenIn.address, tokenIn.decimals, tokenIn.symbol);
  const currencyOut = tokenOutIsNative ? nativeOnChain(tokenOut.chainId) : new Token(tokenOut.chainId, tokenOut.address, tokenOut.decimals, tokenOut.symbol);
  const baseCurrency = isExactInput(tradeType) ? currencyIn : currencyOut;
  const quoteCurrency = isExactInput(tradeType) ? currencyOut : currencyIn;
  const amount = CurrencyAmount.fromRawAmount(baseCurrency, JSBI.BigInt(amountRaw !== null && amountRaw !== void 0 ? amountRaw : '1')); // a null amountRaw should initialize the route
  const route = await router.route(amount, quoteCurrency, tradeType, /*swapConfig=*/undefined, routerConfig);
  if (!amountRaw) return {
    state: QuoteState.INITIALIZED
  };
  if (!route) return {
    state: QuoteState.NOT_FOUND
  };
  return transformSwapRouteToGetQuoteResult(_objectSpread(_objectSpread({}, route), {}, {
    routeString: routeAmountsToString(route.route)
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

export { getClientSideQuoteResult };
