import { AxiosResponse } from "axios";
import { AxiosError } from "axios";
import { UseQueryOptions as RQUseQueryOptions } from "react-query";

type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

export type UseQueryOptions<
  F extends (...args: never) => Promise<AxiosResponse<unknown>>,
  S = Awaited<ReturnType<F>>["data"],
> = RQUseQueryOptions<Awaited<ReturnType<F>>, AxiosError<AxiosResponse<unknown>>, S, never>;
