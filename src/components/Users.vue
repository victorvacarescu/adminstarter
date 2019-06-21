<template>
    <div>
        <el-container>
            <el-col :span='16' :offset='4'>                
                <h1 tex> {{msg}} </h1>
                <el-button type="success">Adauga User</el-button>
                <hr>
            </el-col> 
        </el-container>               
        <br><br>
        <el-col :span='16' :offset='4'>
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="Prenume"
                    label="Prenume"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="Nume"
                    label="Nume"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="Email"
                    label="Adresa E-mail">
                </el-table-column>
                <el-table-column
                    label="Actiuni">
                    <template slot-scope="scope">
                        <el-button
                            type="primary"
                            icon="el-icon-edit"
                            circle
                            @click="handleEdit(scope.row)"></el-button>
                        <el-button
                            type="danger"
                            icon="el-icon-delete"
                            circle
                            @click="handleDelete(scope.row)"></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
        
    </div>
        
</template>

<script>
    export default {
        name: 'Users',
        data (){             
            return {
                tableData: [{
                    Prenume: 'Victor',
                    Nume: 'Vacarescu',
                    Email: 'victor.vacarescu@gmail.com'
                },
                {
                   Prenume: 'Ion',
                    Nume: 'Ionescu',
                    Email: 'ion.ionescu@gmail.com' 
                }],
                msg: 'Lista Useri'
            }        
        }
    }
</script>

