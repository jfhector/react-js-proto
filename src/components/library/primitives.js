import React from 'react'

export const Absolute = (props) => (
      <div
      style={{
            position: "absolute",
      }}
      {...props}
      >
            {props.children}
      </div>
)

export const Sticky = (props) => (
      <div
      style={{
            position: "sticky",
      }}
      {...props}
      >
            {props.children}
      </div>
)

export const Relative = (props) => (
      <div
      style={{
            position: "relative",
      }}
      {...props}
      >
            {props.children}
      </div>
)

export const Fixed = (props) => (
      <div
      style={{
            position: "fixed",
      }}
      {...props}
      >
            {props.children}
      </div>
)

export const Row = (props) => (
      <div
      style={{
            display: "flex",
      }}
      {...props}
      >
            {props.children}
      </div>
)

export const Column = (props) => (
      <div
      style={{
            display: "flex",
            flexDirection: "column",
      }}
      {...props}
      >
            {props.children}
      </div>
)

export const AbsoluteRow = (props) => (
      <div
      style={{
            position: "absolute",
            display: "flex",
      }}
      {...props}
      >
            {props.children}
      </div>
)

export const RelativeRow = (props) => (
      <div
      style={{
            position: "relative",
            display: "flex",
      }}
      {...props}
      >
            {props.children}
      </div>
)

export const RelativeColumn = (props) => (
      <div
      style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
      }}
      {...props}
      >
            {props.children}
      </div>
)

export const Bold = (props) => (
      <span
      style={{
            fontWeight: "bold",
      }}
      {...props}
      >
            {props.children}
      </span>
)
