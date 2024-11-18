// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: juVZkpy6GyNsQ7cQcnMtYR
// Component: 0YsWAKzXDvYV
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  renderPlasmicSlot
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: juVZkpy6GyNsQ7cQcnMtYR/projectcss
import sty from "./PlasmicServiceValue.module.css"; // plasmic-import: 0YsWAKzXDvYV/css

createPlasmicElementProxy;

export const PlasmicServiceValue__VariantProps = new Array();

export const PlasmicServiceValue__ArgProps = new Array("children", "slot");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicServiceValue__RenderFunc(props) {
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
      <h3
        data-plasmic-name={"h3"}
        data-plasmic-override={overrides.h3}
        className={classNames(projectcss.all, projectcss.h3, sty.h3)}
      >
        {renderPlasmicSlot({
          defaultContents: "Value",
          value: args.children
        })}
      </h3>
      <div className={classNames(projectcss.all, sty.freeBox__a4YJa)} />
      <div className={classNames(projectcss.all, sty.freeBox__geT5)}>
        {renderPlasmicSlot({
          defaultContents:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          value: args.slot
        })}
      </div>
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root", "h3"],
  h3: ["h3"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicServiceValue__ArgProps,
          internalVariantPropNames: PlasmicServiceValue__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicServiceValue__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServiceValue";
  } else {
    func.displayName = `PlasmicServiceValue.${nodeName}`;
  }
  return func;
}

export const PlasmicServiceValue = Object.assign(
  // Top-level PlasmicServiceValue renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),
    // Metadata about props expected for PlasmicServiceValue
    internalVariantProps: PlasmicServiceValue__VariantProps,
    internalArgProps: PlasmicServiceValue__ArgProps
  }
);

export default PlasmicServiceValue;
/* prettier-ignore-end */