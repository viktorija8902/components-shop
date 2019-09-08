import * as React from "react";

export interface AncientFieldProps { compiler: string; framework?: string; }

export const AncientInputField = (props: AncientFieldProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;