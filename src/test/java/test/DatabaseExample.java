package test;

import cucumber.api.java.it.Ma;
import org.omg.CORBA.OBJ_ADAPTER;
import org.omg.Messaging.SYNC_WITH_TRANSPORT;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DatabaseExample {
    public static void main(String[] args) throws SQLException {

        String oracleURL = "jdbc:oracle:thin:@ec2-18-225-34-6.us-east-2.compute.amazonaws.com:1521:xe";
        String oracleUsername = "Hr";
        String oraclePassword = "hr";
        Connection connection = DriverManager.getConnection(oracleURL, oracleUsername, oraclePassword);
        Statement statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
        ResultSet resultSet = statement.executeQuery("select employee_id, first_name, last_name from employees");

        ResultSetMetaData metaData = resultSet.getMetaData();
        int columnCount = metaData.getColumnCount();

        List<Map<String, Object>> table = new ArrayList<>();

        while (resultSet.next()) {
            Map<String, Object> map = new HashMap<>();

            for (int column = 1; column <= columnCount; column++) {

                map.put(metaData.getColumnName(column), resultSet.getObject(column));
            }
            table.add(map);
        }
//
        for (Map<String, Object> map : table) {

            System.out.println(map);
        }

        Statement statement2 = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
        ResultSet resultSet2 = statement2.executeQuery("select employee_id, first_name, last_name from employees");
        int columnCount2 = metaData.getColumnCount();

        List<Map<String, Object>> table2 = new ArrayList<>();

        while (resultSet.next()) {
            Map<String, Object> map = new HashMap<>();

            for (int column = 1; column <= columnCount; column++) {

                map.put(metaData.getColumnName(column), resultSet.getObject(column));
            }
            table.add(map);
        }
//
        for (Map<String, Object> map : table) {


        }
    }}

