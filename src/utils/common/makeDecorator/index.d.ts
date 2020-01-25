declare module '@nozbe/watermelondb/utils/common/makeDecorator' {
  import { ReplaceReturn } from '@nozbe/watermelondb/utils/common';

  export type Descriptor = any;
  export type RawDecorator = (
    target: Object,
    key: string,
    descriptor: Descriptor,
  ) => Descriptor;
  export type RawDecoratorFactory<T extends any[]> = (
    ...any: T
  ) => RawDecorator;

  export type Decorator<
    Args extends any[],
    Factory extends RawDecoratorFactory<Args>
    // TODO: fix
    > = any;

  export default function makeDecorator<
    Args extends any[],
    T extends RawDecoratorFactory<Args>
  >(): Decorator<Args, T>;
}