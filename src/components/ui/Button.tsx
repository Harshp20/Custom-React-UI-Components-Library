import { cva, type VariantProps } from "class-variance-authority";
import { useRef } from "react";
import {
  type AriaButtonProps,
  mergeProps,
  useButton,
  useFocusRing,
  useHover,
} from "react-aria";
import { mergeRefs } from "react-aria/mergeRefs";
import { cn } from "../../utils/cn";

type ButtonProps = AriaButtonProps &
  React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
  };

export const Button = ({
  className,
  variant,
  loading,
  children,
  ref: forwardedRef,
  disabled,
  ...props
}: ButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps, isPressed } = useButton(
    { ...props, isDisabled: disabled || loading },
    ref,
  );
  const { hoverProps, isHovered } = useHover(props);
  const { focusProps, isFocusVisible } = useFocusRing(props);

  return (
    <button
      ref={mergeRefs(ref, forwardedRef)}
      className={cn(buttonVariants({ variant }), className)}
      {...mergeProps(buttonProps, hoverProps, focusProps)}
      data-hovered={isHovered || undefined}
      data-pressed={isPressed || undefined}
      data-focus-visible={isFocusVisible || undefined}
    >
      <Loading loading={loading} />
      <div className={cn("transition", loading ? "opacity-0" : "opacity-100")}>
        {children}
      </div>
    </button>
  );
};

const buttonVariants = cva(
  [
    "relative",
    "inline-flex",
    "justify-center",
    "gap-2",
    "text-white",
    "tracking-wide",
    "px-4",
    "py-2",
    "rounded",
    "cursor-pointer",
    "items-center",
    "font-semibold",
    "outline-none",
    "data-[hovered]:opacity-95",
    "data-[hovered]:scale-98",
    "data-[focus-visible]:ring-2",
    "data-[focus-visible]:ring-offset-2",
    "disabled:!opacity-50",
    "disabled:!cursor-not-allowed",
    "data-[pressed]:scale-95",
    "shadow-md",
    "transition",
  ],
  {
    variants: {
      variant: {
        primary: ["bg-blue-800", "ring-blue-800/50"],
        secondary: ["bg-green-800", "ring-green-800/50"],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

function Loading({ loading }: { readonly loading?: boolean }) {
  return (
    <div
      className={cn(
        ["absolute grid", "place-items-center", "transition"],
        loading
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-8 opacity-0",
      )}
    >
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-inherit border-b-transparent" />
    </div>
  );
}
