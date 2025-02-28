import * as ad from "types/ad";
import {
  Center,
  Fill,
  Named,
  Rect,
  Rotate,
  Shape,
  String,
  Stroke,
} from "types/shapes";
import { FloatV, StrV } from "types/value";
import { boolV, floatV, noPaint, strV, vectorV } from "utils/Util";
import { Canvas, Context, sampleColor, uniform } from "./Samplers";

export interface TextProps
  extends Named,
    Stroke,
    Fill,
    Center, // the center of the bounding box of the text
    Rect,
    Rotate,
    String {
  // TODO; pare down this set of attributes
  visibility: StrV;
  fontFamily: StrV;
  fontSizeAdjust: StrV;
  fontStretch: StrV;
  fontStyle: StrV;
  fontVariant: StrV;
  fontWeight: StrV;
  textAnchor: StrV;
  lineHeight: StrV;
  alignmentBaseline: StrV;
  dominantBaseline: StrV;
  ascent: FloatV<ad.Num>;
  descent: FloatV<ad.Num>;
}

export const sampleText = (context: Context, canvas: Canvas): TextProps => ({
  name: strV("defaultText"),
  style: strV(""),
  strokeWidth: floatV(0),
  strokeStyle: strV("solid"),
  strokeColor: noPaint(),
  strokeDasharray: strV(""),
  fillColor: sampleColor(context),
  center: vectorV([
    context.makeInput({
      init: { tag: "Sampled", sampler: uniform(...canvas.xRange) },
      stages: "All",
    }),
    context.makeInput({
      init: { tag: "Sampled", sampler: uniform(...canvas.yRange) },
      stages: "All",
    }),
  ]),
  width: floatV(
    context.makeInput({
      init: { tag: "Pending", pending: 0 },
      stages: new Set(),
    })
  ),
  height: floatV(
    context.makeInput({
      init: { tag: "Pending", pending: 0 },
      stages: new Set(),
    })
  ),
  ascent: floatV(
    context.makeInput({
      init: { tag: "Pending", pending: 0 },
      stages: new Set(),
    })
  ),
  descent: floatV(
    context.makeInput({
      init: { tag: "Pending", pending: 0 },
      stages: new Set(),
    })
  ),
  rotation: floatV(0),
  string: strV("defaultText"),
  visibility: strV(""),
  fontFamily: strV("sans-serif"),
  fontSize: strV("12px"),
  fontSizeAdjust: strV(""),
  fontStretch: strV(""),
  fontStyle: strV(""),
  fontVariant: strV(""),
  fontWeight: strV(""),
  lineHeight: strV(""),
  textAnchor: strV("middle"),
  // NOTE: both `alignmentBaseline` and `dominantBaseline` are necessary for browser support. For instance, Firefox only respects the latter.
  alignmentBaseline: strV("alphabetic"),
  dominantBaseline: strV("alphabetic"),
  ensureOnCanvas: boolV(true),
});

export type Text = Shape & { shapeType: "Text" } & TextProps;

export const makeText = (
  context: Context,
  canvas: Canvas,
  properties: Partial<TextProps>
): Text => ({
  ...sampleText(context, canvas),
  ...properties,
  shapeType: "Text",
});
