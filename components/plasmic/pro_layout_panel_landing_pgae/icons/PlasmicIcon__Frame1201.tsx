// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame1201IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame1201Icon(props: Frame1201IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 46 12"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g opacity={".2"} fill={"currentColor"}>
        <path
          d={
            "M1.122 4.603c.274-1.045.912-1.822 1.805-2.384 1.332-.838 2.817-1.153 4.351-.877 1.865.335 3.218 1.439 4.036 3.154.143.303.24.641.3.97.246 1.343-.102 2.51-1.228 3.31-1.347.958-2.818 1.635-4.54 1.45-1.1-.118-2.166-.356-3.09-1.016a4.229 4.229 0 01-1.634-4.607zm6.35.412c-.102.267-.182.393-.19.532-.008.074.08.204.156.23.166.062.313-.046.296-.203-.018-.152-.135-.29-.263-.56zm2.57 2.273c.065-.177.118-.263.126-.361.008-.051-.066-.106-.098-.162-.052.063-.144.12-.144.185-.01.08.054.174.116.338zM2.307 5.939c.001.171-.028.281.009.362.033.074.128.117.196.17.02-.095.076-.197.051-.28-.019-.082-.123-.134-.256-.252zM6.64 2.58a1.92 1.92 0 00-.172.047c.061.034.123.069.187.092.033.009.073-.01.11-.012-.043-.04-.083-.087-.125-.128z"
          }
        ></path>

        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M27.78 7.589c.12-.446.201-.902.282-1.358.037-.213.075-.427.117-.639l-.014-.003c-.023-.004-.041-.008-.06-.008-.012-.228-.023-.455-.04-.683-.148-1.695-1.075-2.804-2.64-3.367-.978-.353-1.956-.29-2.735.512-.279.284-.575.46-.973.506a2.52 2.52 0 00-.57.17l-.078.03c-1.274.483-1.945 1.415-1.928 2.78.023 1.804.881 3.186 2.326 4.204.5.352 1.092.5 1.718.512 1.092.023 2.099-.268 3.048-.774.768-.41 1.314-1.04 1.547-1.882zm-4.265-5.17c.436-.357.76-.17 1.061.004.045.026.09.052.133.075l-1.194-.08zm3.195 1.92l.063-.215c.12.088.213.517.157.596l-.22-.382zm-4.369 3.926c.079.097.078.4.078.4l-.496-.474s.353-.008.418.074zm1.404-4.644c-.072-.185-.48-.288-.622-.178.117.044.464.15.622.178z"
          }
        ></path>

        <path
          d={
            "M45.33 5.57c.006 1.081-.41 1.997-1.126 2.77-1.07 1.155-2.423 1.844-3.976 1.974-1.888.16-3.48-.557-4.715-2.002a3.971 3.971 0 01-.54-.859c-.586-1.234-.552-2.451.33-3.515 1.052-1.274 2.297-2.309 4.01-2.576 1.091-.17 2.183-.216 3.247.182 1.695.637 2.793 2.23 2.77 4.027zm-6.24 1.246c.029-.284.074-.426.046-.563-.011-.074-.13-.176-.21-.182-.177-.017-.29.125-.234.273.057.142.205.245.398.472zm-3.07-1.53c-.018.188-.046.285-.03.381.006.052.092.086.137.131.034-.074.108-.153.091-.216-.011-.08-.097-.153-.199-.296zm7.82-.7c-.046-.164-.046-.278-.103-.346-.05-.063-.153-.08-.233-.114.006.097-.023.21.023.284.04.074.154.097.313.177zm-3.316 4.369c.051-.028.102-.057.153-.091a1.3 1.3 0 00-.204-.04c-.035 0-.069.029-.103.04.052.028.103.063.154.09z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Frame1201Icon;
/* prettier-ignore-end */
