// String literal types
let autoComplete: "on" | "off" = "on";
autoComplete = "off";
// These are invalid:
// autoComplete = "disabled"
// autoComplete = "OFF"

type NumberBase = 2 | 8 | 10 | 16;

// Numeric literal types
let base: NumberBase;
base = 2;
// This is invalid:
// base = 3

type HTTPSuccessStatusCode =
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226;

// Boolean literal types
let autoFocus: true | false = true;
autoFocus = false;

// Enum literal types
enum Protocols {
  HTTP,
  HTTPS,
  FTP,
}
type HyperTextProtocol = Protocols.HTTP | Protocols.HTTPS;
let protocol: HyperTextProtocol;
// These are invalid
// protocol = "HTTP"
// protocol =Protocols.FTP
