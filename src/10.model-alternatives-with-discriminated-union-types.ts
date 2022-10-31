type Result<T> =
  // success boolean literal type is used as a discriminant in this discriminated union type
  { success: true; value: T } | { success: false; error: string };

function tryParseInt(text: string): Result<number> {
  // check if the string is a positive or negative integer
  if (/^-?\d+$/.test(text)) {
    return {
      success: true,
      value: parseInt(text, 10),
    };
  }

  return {
    success: false,
    error: "Invalid number format",
  };
}

const results = tryParseInt("42");

if (results.success) {
  results;
} else {
  results;
}

interface Cash {
  kind: "cash";
}

interface PayPal {
  kind: "paypal";
  email: string;
}

interface CreditCard {
  kind: "creditcard";
  cardNumber: string;
  securityCode: string;
}

type PaymentMethod = Cash | PayPal | CreditCard;

function stringifyPaymentMethod(method: PaymentMethod): string {
  switch (method.kind) {
    case "cash":
      return "cash";
    case "paypal":
      return `PayPal: ${method.email}`;
    default:
      return "unknown";
  }
}
