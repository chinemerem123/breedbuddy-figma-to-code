import React from "react";

const sizeClasses = {
  txtMontserratAlternatesSemiBold20: "font-montserratalternates font-semibold",
  txtMontserratAlternatesRegular16: "font-montserratalternates font-normal",
  txtMontserratAlternatesBold1584: "font-bold font-montserratalternates",
  txtMontserratAlternatesMedium16WhiteA700e5:
    "font-medium font-montserratalternates",
  txtMontserratAlternatesMedium1408: "font-medium font-montserratalternates",
  txtMontserratAlternatesRegular18: "font-montserratalternates font-normal",
  txtMontserratAlternatesBold18: "font-bold font-montserratalternates",
  txtMontserratAlternatesSemiBold45: "font-montserratalternates font-semibold",
  txtMontserratAlternatesMedium18Gray80001:
    "font-medium font-montserratalternates",
  txtMontserratAlternatesMedium20: "font-medium font-montserratalternates",
  txtMontserratAlternatesSemiBold20WhiteA700:
    "font-montserratalternates font-semibold",
  txtMontserratAlternatesBold75Orange10002:
    "font-bold font-montserratalternates",
  txtMontserratAlternatesMedium16WhiteA700cc:
    "font-medium font-montserratalternates",
  txtMontserratAlternatesMedium18: "font-medium font-montserratalternates",
  txtMontserratAlternatesMedium16: "font-medium font-montserratalternates",
  txtMontserratAlternatesBold75: "font-bold font-montserratalternates",
  txtMontserratAlternatesRegular16WhiteA700b2:
    "font-montserratalternates font-normal",
  txtMontserratAlternatesMedium20WhiteA700:
    "font-medium font-montserratalternates",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
