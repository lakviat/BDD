package steps;

import cucumber.api.java.en.Given;
import utilities.Config;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class occdatabse {
    String db2 = Config.getProperty("db2");
    String db1 = Config.getProperty("db");
    String dbusername = Config.getProperty("dbusername");
    String dbpassword = Config.getProperty("dbpassword");

    List<Map<String, Object>> table = new ArrayList<>();
    List<Map<String, Object>> table2 = new ArrayList<>();


    @Given("Connecting to the first database and storing data")
    public void connecting_to_the_first_database_and_storing_data() throws SQLException {

        Connection connection = DriverManager.getConnection(this.db1, this.dbusername, this.dbpassword);
        Statement statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
        ResultSet resultSet = statement.executeQuery("select employee_id, first_name, last_name from employees");

        ResultSetMetaData metaData = resultSet.getMetaData();
        int columnCount = metaData.getColumnCount();

        while (resultSet.next()) {
            Map<String, Object> map = new HashMap<>();

            for (int column = 1; column <= columnCount; column++) {

                map.put(metaData.getColumnName(column), resultSet.getObject(column));
            }
            table.add(map);
        }
    }

    @Given("Connecting to the second database and storing data")
    public void connecting_to_the_second_database_and_storing_data() throws SQLException
    {Connection connection = DriverManager.getConnection(this.db2, this.dbusername, this.dbpassword);
        Statement statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
        ResultSet resultSet = statement.executeQuery("select employee_id, first_name, last_name from employees");

        ResultSetMetaData metaData = resultSet.getMetaData();
        int columnCount = metaData.getColumnCount();

        while (resultSet.next()) {
            Map<String, Object> map = new HashMap<>();

            for (int column = 1; column <= columnCount; column++) {

                map.put(metaData.getColumnName(column), resultSet.getObject(column));
            }
            table2.add(map);
        }

    }

    @Given("Star comparing data from two databases")
    public void star_comparing_data_from_two_databases() throws Exception {

        if(table.size() == table2.size()){
            System.out.printf("The size of two tables equal");
        Thread.sleep(100);
            System.out.printf("Procedding with comparison each values in tables");
            Thread.sleep(100);
            for(int i = 0; i< table.size(); i++){
                for(int j = 0; j< table.get(i).size();j++){
                    if(table.get(j).keySet().equals(table2.get(j).keySet())){
                        System.out.println(table.get(j).values().toString().equals(table2.get(j).values().toString()));
                    }
                }
            }
        }else{
            System.out.printf("size is different");
        }
    }
    }
