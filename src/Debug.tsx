interface DebugProps {
  [key: string]: any;
}

export const Debug = (props: DebugProps) => (
  <article>
    <code>
      <pre>{JSON.stringify(props, undefined, 4)}</pre>
    </code>
  </article>
);
