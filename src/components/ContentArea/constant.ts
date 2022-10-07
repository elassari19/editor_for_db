const content = [
  `-- learn more on https://docs.project.co/guides/tables/.`,
  ``,
  `-- js type(´table´)`,
  ``,
  `SELECT country          as country`,
  `       device_type     as device_type`,
  `       sum(revenue)    as revenue`,
  `       sum(sessions)   as sessions`,
  `       sum(pageviews)  as pageviews`,
  `FROM my_table`,
  `WHERE country = ´FRANCE´`,
  `GROUP by 1, 2`,
]

export const folder = [
  'dataset_1',
  'dataset_5_from_script_builder',
  'dataset_3_incremental_data',
  'dataset_4_incremental_snapshot',
  'reporting_db',
]

export const folder2 = [
  'dataset_2',
  'dataset_6_from_script_builder',
  'dataset_7_incremental_data',
  'dataset_8_incremental_snapshot',
]

export default content
