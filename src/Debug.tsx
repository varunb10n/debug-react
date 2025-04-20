interface DebugProps {
  [key: string]: any;
}

export const Debug = (props: DebugProps) => (
  <article>
    <pre>{JSON.stringify(props, undefined, 4)}</pre>
  </article>
);
