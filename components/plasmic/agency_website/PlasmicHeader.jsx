// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: juVZkpy6GyNsQ7cQcnMtYR
// Component: o3OmhqmRx_2W
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariantsraGy9YoyxeH2 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: RaGy9YoyxeH2/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: juVZkpy6GyNsQ7cQcnMtYR/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: o3OmhqmRx_2W/css
import Icon29Icon from "./icons/PlasmicIcon__Icon29"; // plasmic-import: rIX1VUtadyLs/icon

createPlasmicElementProxy;

export const PlasmicHeader__VariantProps = new Array();

export const PlasmicHeader__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHeader__RenderFunc(props) {
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
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__reoOp)}
      >
        <PlasmicLink__
          className={classNames(projectcss.all, projectcss.a, sty.link__hvSRl)}
          component={Link}
          href={`/`}
          platform={"nextjs"}
        >
          <PlasmicImg__
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"78px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"78px"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            src={"/plasmic/agency_website/images/logoSvg.svg"}
          />
        </PlasmicLink__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__dlSh)}
        >
          <Stack__
            as={PlasmicLink__}
            data-plasmic-name={"aboutUs"}
            data-plasmic-override={overrides.aboutUs}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.aboutUs)}
            component={Link}
            href={`/about-us`}
            platform={"nextjs"}
          >
            {false ? (
              <Icon29Icon
                className={classNames(projectcss.all, sty.svg__cuzW4)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__n6V05
              )}
            >
              {"About Us"}
            </div>
            {false ? (
              <Icon29Icon
                className={classNames(projectcss.all, sty.svg__pzEcp)}
                role={"img"}
              />
            ) : null}
          </Stack__>
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__ssEy5
            )}
            component={Link}
            href={`/services`}
            platform={"nextjs"}
          >
            {false ? (
              <Icon29Icon
                className={classNames(projectcss.all, sty.svg__kK0Iw)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__td9Sg
              )}
            >
              {"Services"}
            </div>
            {false ? (
              <Icon29Icon
                className={classNames(projectcss.all, sty.svg__oiTMa)}
                role={"img"}
              />
            ) : null}
          </Stack__>
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link___8SXiH
            )}
            component={Link}
            href={`/client`}
            platform={"nextjs"}
          >
            {false ? (
              <Icon29Icon
                className={classNames(projectcss.all, sty.svg__d2LVa)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__loBw7
              )}
            >
              {"Clients"}
            </div>
            {false ? (
              <Icon29Icon
                className={classNames(projectcss.all, sty.svg__oqDjk)}
                role={"img"}
              />
            ) : null}
          </Stack__>
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.link__aout)}
            component={Link}
            platform={"nextjs"}
          >
            {false ? (
              <Icon29Icon
                className={classNames(projectcss.all, sty.svg__pie8S)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rKRyv
              )}
            >
              {"Blog"}
            </div>
            {false ? (
              <Icon29Icon
                className={classNames(projectcss.all, sty.svg___2DkOv)}
                role={"img"}
              />
            ) : null}
          </Stack__>
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__a6THh
            )}
            component={Link}
            href={`/contact`}
            platform={"nextjs"}
          >
            {false ? (
              <Icon29Icon
                className={classNames(projectcss.all, sty.svg__q0Hxw)}
                role={"img"}
              />
            ) : null}
            <div
              data-plasmic-name={"contact"}
              data-plasmic-override={overrides.contact}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.contact
              )}
            >
              {"Contact Us"}
            </div>
            {false ? (
              <Icon29Icon
                className={classNames(projectcss.all, sty.svg__zdRHl)}
                role={"img"}
              />
            ) : null}
          </Stack__>
        </Stack__>
      </Stack__>
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "aboutUs", "contact"],
  img: ["img"],
  aboutUs: ["aboutUs"],
  contact: ["contact"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    aboutUs: makeNodeComponent("aboutUs"),
    contact: makeNodeComponent("contact"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
