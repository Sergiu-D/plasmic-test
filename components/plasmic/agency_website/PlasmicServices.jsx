// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: juVZkpy6GyNsQ7cQcnMtYR
// Component: G9nam33XXdQ1
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Header from "../../Header"; // plasmic-import: o3OmhqmRx_2W/component
import ServiceWhite from "../../ServiceWhite"; // plasmic-import: mnA1CLTURO1Q/component
import ServiceDark from "../../ServiceDark"; // plasmic-import: z6bWt1eCFibA/component
import HomeFooterTop from "../../HomeFooterTop"; // plasmic-import: hl1a0oV_dA0U/component
import FooterMain from "../../FooterMain"; // plasmic-import: tesvkPR1z3Cj/component
import { useScreenVariants as useScreenVariantsraGy9YoyxeH2 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: RaGy9YoyxeH2/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: juVZkpy6GyNsQ7cQcnMtYR/projectcss
import sty from "./PlasmicServices.module.css"; // plasmic-import: G9nam33XXdQ1/css

createPlasmicElementProxy;

export const PlasmicServices__VariantProps = new Array();

export const PlasmicServices__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicServices__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsraGy9YoyxeH2()
  });
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicServices.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicServices.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicServices.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div
            data-plasmic-name={"aboutUsBanner"}
            data-plasmic-override={overrides.aboutUsBanner}
            className={classNames(projectcss.all, sty.aboutUsBanner)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"foreground2"}
              data-plasmic-override={overrides.foreground2}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground2)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__tzOjC)}
              >
                <h1
                  data-plasmic-name={"h1"}
                  data-plasmic-override={overrides.h1}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1
                  )}
                >
                  {"Services"}
                </h1>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__keqGk
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Lorem Ipsum is simply dummy text of the printing and typesetting indstandard dummy text ever since the 1500s."
                    : "Lorem Ipsum is simply dummy text of the printing and typesetting indstandard dummy text ever since the 1500s."}
                </div>
              </Stack__>
            </Stack__>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__vjTa)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__rbkXa)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__b3EBx)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__jTyh)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__hAw87
                    )}
                  >
                    {"Service type"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__k1O9Q
                    )}
                  >
                    {
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    }
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__r17MH)}
                >
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"serviceRow"}
                    data-plasmic-override={overrides.serviceRow}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.serviceRow)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__uwXs)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite___0Wx5R
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__cPfom
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column___2Jg0O)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite__bbHs7
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3___7Zxur
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__n6Nmf)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite__cUrm6
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__eqOL
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__dSsy)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite__uQtT3
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__x02Y
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column___6X918)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite__no48F
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__aVslw
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__luhAr)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite__vdOpq
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__hyJkb
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                  </Stack__>
                </Stack__>
              </Stack__>
            </Stack__>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__rrfF)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__yTbN)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__mi9YM)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__hBb2P)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__ynHe
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Service category"
                      : "Service type"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cLrkb
                    )}
                  >
                    {
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                    }
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__wVzmd)}
                >
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"serviceRow2"}
                    data-plasmic-override={overrides.serviceRow2}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.serviceRow2)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__e2RqS)}
                    >
                      <ServiceDark
                        className={classNames(
                          "__wab_instance",
                          sty.serviceDark__iScVb
                        )}
                        slot={
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__ax8A)}
                    >
                      <ServiceDark
                        className={classNames(
                          "__wab_instance",
                          sty.serviceDark__xyPbT
                        )}
                        slot={
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        }
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__sgnYr
                          )}
                        >
                          {"Service name 3"}
                        </div>
                      </ServiceDark>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__xG1JI)}
                    >
                      <ServiceDark
                        className={classNames(
                          "__wab_instance",
                          sty.serviceDark__h33MS
                        )}
                        slot={
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column___3OHnT)}
                    >
                      <ServiceDark
                        className={classNames(
                          "__wab_instance",
                          sty.serviceDark__gouRs
                        )}
                        slot={
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__h4FIn)}
                    >
                      <ServiceDark
                        className={classNames(
                          "__wab_instance",
                          sty.serviceDark__zwL8N
                        )}
                        slot={
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__yorjK)}
                    >
                      <ServiceDark
                        className={classNames(
                          "__wab_instance",
                          sty.serviceDark__kzhoR
                        )}
                        slot={
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        }
                      />
                    </div>
                  </Stack__>
                </Stack__>
              </Stack__>
            </Stack__>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__f0DYt)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__kFfSf)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___7Aiit)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__k9Vbd)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__lvSoa
                    )}
                  >
                    {"Service type"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qNscH
                    )}
                  >
                    {
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    }
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___3Bf4Y)}
                >
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"serviceRow3"}
                    data-plasmic-override={overrides.serviceRow3}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.serviceRow3)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__na43C)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite___7Hy7
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__bzDrI
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__u9O5)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite__wql3R
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__l80YR
                          )}
                        >
                          {"Services 2"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__zjZ99)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite___96Op0
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__cxBda
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__kodrZ)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite__l47Kd
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__lhgR
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__xqqmG)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite__cyv0U
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__bS7Mr
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__hST)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite__n6LKi
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__tnaC5
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                  </Stack__>
                </Stack__>
              </Stack__>
            </Stack__>
          </div>
          <div
            data-plasmic-name={"footerTopSection"}
            data-plasmic-override={overrides.footerTopSection}
            className={classNames(projectcss.all, sty.footerTopSection)}
          >
            <HomeFooterTop
              data-plasmic-name={"homeFooterTop"}
              data-plasmic-override={overrides.homeFooterTop}
              className={classNames("__wab_instance", sty.homeFooterTop)}
            />
          </div>
          <FooterMain
            data-plasmic-name={"footerMain"}
            data-plasmic-override={overrides.footerMain}
            className={classNames("__wab_instance", sty.footerMain)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "aboutUsBanner",
    "foreground2",
    "h1",
    "serviceRow",
    "serviceRow2",
    "serviceRow3",
    "footerTopSection",
    "homeFooterTop",
    "footerMain"
  ],

  header: ["header"],
  aboutUsBanner: ["aboutUsBanner", "foreground2", "h1"],
  foreground2: ["foreground2", "h1"],
  h1: ["h1"],
  serviceRow: ["serviceRow"],
  serviceRow2: ["serviceRow2"],
  serviceRow3: ["serviceRow3"],
  footerTopSection: ["footerTopSection", "homeFooterTop"],
  homeFooterTop: ["homeFooterTop"],
  footerMain: ["footerMain"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicServices__ArgProps,
          internalVariantPropNames: PlasmicServices__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicServices__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServices";
  } else {
    func.displayName = `PlasmicServices.${nodeName}`;
  }
  return func;
}

export const PlasmicServices = Object.assign(
  // Top-level PlasmicServices renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    aboutUsBanner: makeNodeComponent("aboutUsBanner"),
    foreground2: makeNodeComponent("foreground2"),
    h1: makeNodeComponent("h1"),
    serviceRow: makeNodeComponent("serviceRow"),
    serviceRow2: makeNodeComponent("serviceRow2"),
    serviceRow3: makeNodeComponent("serviceRow3"),
    footerTopSection: makeNodeComponent("footerTopSection"),
    homeFooterTop: makeNodeComponent("homeFooterTop"),
    footerMain: makeNodeComponent("footerMain"),
    // Metadata about props expected for PlasmicServices
    internalVariantProps: PlasmicServices__VariantProps,
    internalArgProps: PlasmicServices__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Service",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicServices;
/* prettier-ignore-end */
