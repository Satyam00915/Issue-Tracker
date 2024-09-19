import {
  Badge,
  Code,
  DataList,
  Flex,
  IconButton,
  Text,
} from "@radix-ui/themes";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { z } from "zod";
import { fullissueSchema } from "../validationSchemas";

type IssuecardSchema = z.infer<typeof fullissueSchema>;

const IssueCard = ({
  title,
  description,
  status,
  createdAt,
}: IssuecardSchema) => {
  return (
    <DataList.Root className="border border-gray-500 rounded-md shadow-lg w-fit p-4">
      <DataList.Item align="center">
        <DataList.Label minWidth="88px">Status</DataList.Label>
        <DataList.Value>
          <Text
            className={classNames({
              "text-red-500": status === "OPEN",
              "text-gray-600": status === "IN_PROGRESS",
              "text-green-500": status === "CLOSED",
            })}
          >
            {status}
          </Text>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item></DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Title</DataList.Label>
        <DataList.Value>{title}</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Description</DataList.Label>
        <DataList.Value>{description}</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Created At</DataList.Label>
        <DataList.Value>{createdAt}</DataList.Value>
      </DataList.Item>
    </DataList.Root>
  );
};

export default IssueCard;
