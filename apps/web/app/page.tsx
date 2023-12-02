"use client"; // This is a client component 👈🏽

import Image from "next/image";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Column, Row } from "../components";
import { SizedBox } from "../components/SizedBox";
import { Padding } from "../components/Padding";
import { Checkbox } from "../components/Checkbox";
import { CheckboxListTile } from "../components/CheckboxListTile";
import { Card } from "../components/Card";
import { Chip } from "../components/Chip";
import { Wrap } from "../components/Wrap";
import { IconButton } from "../components/IconButton";
import { Expanded } from "../components/Expanded";
import { Flexible } from "../components/Flexible";

export default function Page(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div style={{ height: "300px", backgroundColor: "red" }}>
        <Column
          className="h-full w-ful bg-green-500"
          mainAxisAlignment="center"
          spacer={8}
          padding={8}
        >
          <Row className="bg-white">
            {/*  <Expanded className="bg-green-400">
              <div>1</div>
            </Expanded> */}
            <Flexible 
            grow={false}
            className="bg-green-400">
              <div>1</div>
            </Flexible>
            <Flexible  className="bg-purple-400">
              <div>2</div>
            </Flexible>
            <Flexible  grow={true} className="bg-red-400">
              <div>3</div>
            </Flexible>
            <Flexible  grow={false} className="bg-yellow-400">
              <div>4</div>
            </Flexible>
          </Row>
          <div className="flex h-48 w-96">
            <div className="grow basis-auto bg-green-400">1</div>
            <div className="grow basis-auto bg-purple-400">1</div>
            <div className="grow basis-auto bg-red-400">1</div>
            <div className="grow basis-1/3 bg-yellow-400">1</div>
          </div>
        </Column>
      </div>
    </div>
  );
}
