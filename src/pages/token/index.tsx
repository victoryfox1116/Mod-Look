import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import PageFooter from "../../components/PageFooter";
import {
  LiqudityPoolIcon,
  RewardPoolIcon,
  WalletIcon,
} from "../../components/svgIcons";
import { LIVE_URL } from "../../config";

const MODULToken: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Moduluc | MODUL Token"
        description="$MODUL is an SPL utility token that will be used for various functions inside the Parametrise ecosystem. 1 billion
                MODUL total fixed supply"
        openGraph={{
          url: `${LIVE_URL}token`,
          title: "Moduluc | MODUL Token",
          description:
            "$MODUL is an SPL utility token that will be used for various functions inside the Parametrise ecosystem. 1 billion MODUL total fixed supply",
          images: [
            {
              url: `${LIVE_URL}img/seo/MODUL-token.jpg`,
              width: 800,
              height: 600,
              alt: "Moduluc",
              type: "image/jpeg",
            },
          ],
          site_name: "Moduluc",
        }}
      />
      <div className="main">
        <span className="token-bg-1">
          {/* eslint-disable-next-line */}
          <img src="/img/modul-token-bg.png" alt="" />
        </span>
        <div className="container">
          <div className="token-row">
            <div className="token-intro-item">
              <div className="token-intro-item-content">
                <h2>
                  <span>MODUL</span> Token
                </h2>
                <p>
                  $MODUL is an SPL utility token that will be used for various
                  functions inside the Parametrise ecosystem.
                </p>
              </div>
            </div>
            <div className="token-intro-item">
              <div className="token-intro-item-content">
                <h2 className="text-center">
                  <span>
                    1 billion <br />
                    MODUL
                  </span>
                  <br />
                  total fixed supply
                </h2>
              </div>
            </div>
          </div>
          <div className="token-intro-item-2">
            <p>
              <span>Differs from most other SPL tokens</span>
              <br />
              because it will be more than a governance token, but rather an
              in-game utility token to purchase and unlock metaverse features,
              upgrades, and assets.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="token-cards">
            <h2>Uses for MODUL:</h2>
            <div className="token-cards-content">
              <div className="token-new-card-box">
                <div className="token-card">
                  <div className="card-icon">
                    {/* eslint-disable-next-line */}
                    <img src="/img/modul-token/icon-feature-4.png" alt="" />
                  </div>
                  <p>
                    <span>Upgrading</span>
                    <br />
                    Upgrade your enviro tiers to higher ones that are larger and
                    comes with many more features!
                  </p>
                </div>
              </div>
              <div className="token-new-card-box">
                <div className="token-card">
                  <div className="card-icon">
                    {/* eslint-disable-next-line */}
                    <img src="/img/modul-token/icon-feature-1.png" alt="" />
                  </div>
                  <p>
                    <span>Buy 3D Assets from Moduluc Marketplace </span>
                    <br />
                    at a discounted price
                  </p>
                </div>
              </div>
              <div className="token-new-card-box">
                <div className="token-card">
                  <div className="card-icon">
                    {/* eslint-disable-next-line */}
                    <img src="/img/modul-token/icon-feature-2.png" alt="" />
                  </div>
                  <p>
                    <span>Access to our partners services</span>
                    <br />
                    like music service subscription and much more
                  </p>
                </div>
              </div>
              <div className="token-new-card-box">
                <div className="token-card">
                  <div className="card-icon">
                    {/* eslint-disable-next-line */}
                    <img src="/img/modul-token/icon-feature-5.png" alt="" />
                  </div>
                  <p>
                    <span>Purchase more 3D assets and NFTs</span>
                    <br />
                    Like high quality furniture, material and finishes, dynamic
                    assets and more!
                  </p>
                </div>
              </div>
              <div className="token-new-card-box">
                <div className="token-card">
                  <div className="card-icon">
                    {/* eslint-disable-next-line */}
                    <img src="/img/modul-token/icon-feature-3.png" alt="" />
                  </div>
                  <p>
                    <span>Payment currency of MWS</span>
                    <br />
                    include our secure GPU cloud hosting to experience Moduluc
                    metaverse on any devices!
                  </p>
                </div>
              </div>
            </div>
            <p className="any-more">... and many more!</p>
          </div>
        </div>
        {/* <div className="container z-2">
          <div className="token-advanced">
            <div className="token-advanced-title">
              <h2>Advanced</h2>
              <p>micro-ecosystem tokenomics</p>
            </div>
          </div>
          <div className="token-advanced-content">
            <div className="advanced-card">
              <span className="advanced-card-icon">
                <WalletIcon />
              </span>
              <p>
                <span>Users have the ability to stake </span>
                <br />
                their Parametrise collections to earn staking rewards in form
                MODUL token
              </p>
            </div>
            <div className="advanced-card">
              <span className="advanced-card-icon">
                <LiqudityPoolIcon />
              </span>
              <p>
                <span>MODUL/USDC liquidity pool</span>
                <br />
                Additional MODUL rewards for those who add to the liquidity pool
              </p>
            </div>
            <div className="advanced-card">
              <span className="advanced-card-icon">
                <RewardPoolIcon />
              </span>
              <p>
                <span>
                  Upgrade fees paid in MODUL are allocated to ecosystem
                  development,
                </span>
                <br />
                including employees compensation, future staking rewards and
                developing new products and services
              </p>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="supply-circle">
            {/* eslint-disable-next-line */}
            <img src="/img/token-back-2.svg" alt="" />
          </div>
          <div className="supply-circle-sm">
            {/* eslint-disable-next-line */}
            <img src="/img/token-back-2-sm.svg" alt="" />
          </div>
        </div>
        <PageFooter title="Enviro" link="/projects/enviro" />
      </div>
    </>
  );
};

export default MODULToken;
