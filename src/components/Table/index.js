import React from 'react';
import PropType from 'prop-types';
import { Card, CardHeader, Typography, Button, CardBody, Input } from '@material-tailwind/react';
import classNames from 'classnames';

export default function MyTable({ className, heads = [], rows = [], renderRow }) {
  return (
    <Card className={classNames('w-full h-full', className)}>
      <CardHeader floated={false} shadow={false} className="w-full px-5 rounded-none">
        <div className="flex flex-col justify-between gap-8 mb-4 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Recent Transactions
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about the last transactions
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="w-full px-0 overflow-scroll">
        <table className="w-full text-left table-auto">
          <thead>
            <tr>
              {heads.map((head) => (
                <th key={head} className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{rows.map((row, index) => <tr key={index}>{renderRow?.(row, index)}</tr>)}</tbody>
        </table>
      </CardBody>
    </Card>
  );
}

MyTable.propTypes = {
  heads: PropType.arrayOf(PropType.string),
  rows: PropType.arrayOf(PropType.any),
  renderRow: PropType.func,
  className: PropType.string,
};
