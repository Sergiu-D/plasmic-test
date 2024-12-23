// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: juVZkpy6GyNsQ7cQcnMtYR
// Component: BBeltRLt0kLU
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: juVZkpy6GyNsQ7cQcnMtYR/projectcss
import sty from "./PlasmicBlueBdr.module.css"; // plasmic-import: BBeltRLt0kLU/css

createPlasmicElementProxy;

export const PlasmicBlueBdr__VariantProps = new Array();

export const PlasmicBlueBdr__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBlueBdr__RenderFunc(props) {
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
  return (
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
    />
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicBlueBdr__ArgProps,
          internalVariantPropNames: PlasmicBlueBdr__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBlueBdr__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlueBdr";
  } else {
    func.displayName = `PlasmicBlueBdr.${nodeName}`;
  }
  return func;
}

export const PlasmicBlueBdr = Object.assign(
  // Top-level PlasmicBlueBdr renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicBlueBdr
    internalVariantProps: PlasmicBlueBdr__VariantProps,
    internalArgProps: PlasmicBlueBdr__ArgProps
  }
);

export default PlasmicBlueBdr;
/* prettier-ignore-end */
