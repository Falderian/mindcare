export class QueryBuilder {
  static buildUpdateQuery(
    tableName: string,
    identifierKey: string,
    identifierValue: string | number,
    dto: Record<string, any>
  ): string {
    const fieldsToUpdate = Object.entries(dto)
      .map(([key, value]) => {
        if (typeof value === 'string') {
          value = `'${value.replace(/'/g, "''")}'`;
        } else if (value instanceof Date) {
          value = `'${value.toISOString()}'`;
        } else if (value === null || value === undefined) {
          value = 'NULL';
        }
        return `"${key}" = ${value}`;
      })
      .join(', ');

    return `
      UPDATE "${tableName}"
      SET ${fieldsToUpdate}
      WHERE "${identifierKey}" = '${identifierValue}';
    `;
  }
}
