import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const baselineProps = {
  rows: [{ id: 0, brand: 'Nike' }],
  columns: [{ field: 'brand', type: 'string', editable: true, width: 100 }],
};

export default function KeyboardEditInput() {
  return (
    <div style={{ width: 300, height: 300 }}>
      <DataGrid {...baselineProps} />
    </div>
  );
}
