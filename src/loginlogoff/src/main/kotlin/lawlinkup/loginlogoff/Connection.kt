package lawlinkup.loginlogoff
import org.apache.commons.dbcp2.BasicDataSource
import org.springframework.jdbc.core.JdbcTemplate

class Connection {
    val url = "jdbc:mysql://localhost:3306/test"
    val username = "root"
    val password = "root"


    fun getJdbcTemplate(): JdbcTemplate {
        val dataSource = BasicDataSource();
        dataSource.url = url
        dataSource.username = username
        dataSource.password = password
        return JdbcTemplate(dataSource)
    }

}