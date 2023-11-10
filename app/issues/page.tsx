"use client";

import React, { useEffect, useState } from "react";
import { Button, Kbd, Table } from "@radix-ui/themes";
import Link from "next/link";
import axios from "axios";

interface Issue {
  id: number;
  title: String;
  description: String;
  status: String;
  createdAt: String;
  updatedAt: Date;
}

const IssuesPage = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  useEffect(() => {
    // Fetch issues data when the component mounts
    axios
      .get("/api/issues")
      .then((response) => setIssues(response.data))
      .catch((error) => console.error("Error fetching issues:", error));
  }, []);

  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
      <Table.Root variant="surface" className="mt-5 w-full p-2">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell className="w-15">ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="w-2/6 p-2">
              Title
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="w-2/6 p-2">
              Description
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="w-1/6 p-2">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="w-2/6 p-2">
              Created At
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.RowHeaderCell className="p-2">
                {issue.id}
              </Table.RowHeaderCell>
              <Table.Cell className="p-2">{issue.title}</Table.Cell>
              <Table.Cell className="p-2">{issue.description}</Table.Cell>
              <Table.Cell className="p-2">
                <Kbd>{issue.status}</Kbd>
              </Table.Cell>
              <Table.Cell className="p-2">{issue.createdAt}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
