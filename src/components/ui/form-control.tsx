import clsx from "clsx";

type FormControlProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  altLabel?: string;
};

export default function FormControl(props: FormControlProps) {
  return (
    <label className={"form-control"}>
      <div className={"label"}>
        <span className={"label-text"}>{props.label}</span>
        {props.altLabel && <span className={"label-text-alt"}>{props.altLabel}</span>}
      </div>
      <input className={clsx("input", props.className)} {...props} />
    </label>
  );
}