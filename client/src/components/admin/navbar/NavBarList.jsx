import  React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Divider from '@mui/material/Divider';  
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List'; 

const MainListItems = props => { 
  const [openAluno, setAluno] = React.useState(false);
  const [openModulo, setModulo] = React.useState(false);
  const [openProfessor, setProfessor] = React.useState(false);

  const [openPlano, setPlano] = React.useState(false);
  const [openCursos, setCursos] = React.useState(false);
  const [openPromocoes, setPromocoes] = React.useState(false);

const ListItemLink = (props) => {
  return (
    <ListItem button sx={{ pl: 4 }} component="a" href={`/admin/${props.link}`}>
      <ListItemIcon>
        <LayersIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary={props.title} />
    </ListItem>
  );
}

  return( 
  <div>
    <ListItem button component="a" href="/admin">
      <ListItemIcon >
        <DashboardIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Aulas" />
    </ListItem>

    <List>
      <ListItem button onClick={() => setModulo(!openModulo) }>
        <ListItemIcon>
          <LayersIcon color="primary"/>
        </ListItemIcon>
        <ListItemText primary='Modulos' />
      </ListItem>
      <Collapse component="li" in={openModulo} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItemLink title="Listar Modulos" />
          <ListItemLink title="Cadastrar Modulos" />
        </List>
      </Collapse>
    </List>

    <ListItem button>
      <ListItemIcon>
        <BarChartIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Financeiro" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <LayersIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Email" />
    </ListItem>

    <List>
      <ListItem button onClick={() => setProfessor(!openProfessor)}>
        <ListItemIcon>
          <LayersIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary='Professor' />
      </ListItem>
      <Collapse component="li" in={openProfessor} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItemLink title="Listar Professor" />
          <ListItemLink title="Cadastrar Professor" />
        </List>
      </Collapse>
    </List>

    <List>
      <ListItem button onClick={() => setAluno(!openAluno)}>
        <ListItemIcon>
          <LayersIcon color="primary"/>
        </ListItemIcon>
        <ListItemText primary='Alunos' />
      </ListItem>
      <Collapse component="li" in={openAluno} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItemLink title="Listar Aluno" link="listar-alunos"/>
          <ListItemLink title="Cadastrar Aluno" link="cadastrar-alunos"/>
        </List>
      </Collapse>
    </List>

    <List>
      <ListItem button onClick={() => setPlano(!openPlano)}>
        <ListItemIcon>
          <LayersIcon color="primary"/>
        </ListItemIcon>
        <ListItemText primary='Planos' />
      </ListItem>
      <Collapse component="li" in={openPlano} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItemLink title="Listar Planos" />
          <ListItemLink title="Cadastrar Planos" link="cadastrar-planos" />
        </List>
      </Collapse>
    </List>

    <List>
      <ListItem button onClick={() => setCursos(!openCursos)}>
        <ListItemIcon>
          <LayersIcon color="primary"/>
        </ListItemIcon>
        <ListItemText primary='Cursos' />
      </ListItem>
      <Collapse component="li" in={openCursos} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItemLink title="Listar Cursos" />
          <ListItemLink title="Cadastrar Cursos" />
        </List>
      </Collapse>
    </List>

    <List>
      <ListItem button onClick={() => setPromocoes(!openPromocoes)}>
        <ListItemIcon>
          <LayersIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary='Promoções' />
      </ListItem>
      <Collapse component="li" in={openPromocoes} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItemLink title="Listar Promoções" />
          <ListItemLink title="Cadastrar Promoções" />
        </List>
      </Collapse>
    </List>

  
  </div>
  )
}

const SecondaryListItems = () => (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
) 

export default function NavBarList() {
  return( 
    <>
      <MainListItems />
      <Divider light/>
      <SecondaryListItems/>
    </>
  )
}
