/**
 *
 * 功能描述:
 *
 * @className RestTestHttpConfiguration
 * @projectName papio
 * @author yanshaowen
 * @date 2019/2/14 10:19
 */
import {Bean, Configuration, AxiosDataSource, MapperScan} from "../../../src/PapioCommon";
import {IDataSource} from "type-interface";


@Configuration
@MapperScan("@../test/src/dao/rest-test")
//@MapperScan("@dao/rest-test")
export class RestTestHttpConfiguration {
    @Bean
    public restTestDataSourceMaster(): IDataSource {
        const httpDataSource = new AxiosDataSource();
        httpDataSource.setName("master");
        httpDataSource.setReadOnly(false);
        httpDataSource.setUrl("http://localhost:8080");
        httpDataSource.build();
        return httpDataSource;
    }
}
