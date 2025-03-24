import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarEdificio, cargarEdificios, editarEdificio, eliminarEdificio } from '../../features/edificios/edificiosSlice';
import {
    ActionButton,
    ActionButtons,
    Button,
    Container,
    FilterLabel,
    FilterSection,
    FilterSelect,
    Form,
    Input,
    InputGroup,
    Label,
    Table,
    Td,
    Th,
    Title,
    Tr
} from './styles/AdministrarConsorcios.styles';

const AdministrarConsorcios = () => {
  const dispatch = useDispatch();
  const edificios = useSelector(state => state.edificios.edificios);
  const [editingId, setEditingId] = useState(null);
  const [filtroAdministracion, setFiltroAdministracion] = useState('');

  useEffect(() => {
    dispatch(cargarEdificios());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    nombreEdificio: '',
    cuit: '',
    nombreAdministracion: ''
  });

  // Obtener lista única de administraciones
  const administraciones = useMemo(() => {
    const unicas = [...new Set(edificios.map(e => e.nombreAdministracion))];
    return unicas.sort();
  }, [edificios]);

  // Filtrar edificios según la administración seleccionada
  const edificiosFiltrados = useMemo(() => {
    if (!filtroAdministracion) return edificios;
    return edificios.filter(e => e.nombreAdministracion === filtroAdministracion);
  }, [edificios, filtroAdministracion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      dispatch(editarEdificio({ id: editingId, datos: formData }));
      setEditingId(null);
    } else {
      dispatch(agregarEdificio(formData));
    }
    setFormData({
      nombreEdificio: '',
      cuit: '',
      nombreAdministracion: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEdit = (edificio) => {
    setEditingId(edificio.id);
    setFormData({
      nombreEdificio: edificio.nombreEdificio,
      cuit: edificio.cuit,
      nombreAdministracion: edificio.nombreAdministracion
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Está seguro de que desea eliminar este consorcio?')) {
      dispatch(eliminarEdificio(id));
    }
  };

  const handleFiltroChange = (e) => {
    setFiltroAdministracion(e.target.value);
  };

  return (
    <Container>
      <Title>Administrar Consorcios</Title>
      
      <FilterSection>
        <FilterLabel>Filtrar por Administración:</FilterLabel>
        <FilterSelect 
          value={filtroAdministracion} 
          onChange={handleFiltroChange}
        >
          <option value="">Todas las administraciones</option>
          {administraciones.map(admin => (
            <option key={admin} value={admin}>
              {admin}
            </option>
          ))}
        </FilterSelect>
      </FilterSection>

      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Nombre del Edificio</Label>
          <Input
            type="text"
            name="nombreEdificio"
            value={formData.nombreEdificio}
            onChange={handleChange}
            placeholder="Nombre del edificio"
            required
          />
        </InputGroup>

        <InputGroup>
          <Label>CUIT</Label>
          <Input
            type="text"
            name="cuit"
            value={formData.cuit}
            onChange={handleChange}
            placeholder="Ingrese el CUIT"
            required
          />
        </InputGroup>

        <InputGroup>
          <Label>Nombre de la Administración</Label>
          <Input
            type="text"
            name="nombreAdministracion"
            value={formData.nombreAdministracion}
            onChange={handleChange}
            placeholder="Nombre completo de la administración"
            required
          />
        </InputGroup>

        <Button type="submit">
          {editingId ? 'Actualizar Consorcio' : 'Agregar Consorcio'}
        </Button>
      </Form>

      <Table>
        <thead>
          <tr>
            <Th>Nombre del Edificio</Th>
            <Th>CUIT</Th>
            <Th>Nombre de la Administración</Th>
            <Th>Acciones</Th>
          </tr>
        </thead>
        <tbody>
          {edificiosFiltrados.map(edificio => (
            <Tr key={edificio.id}>
              <Td>{edificio.nombreEdificio}</Td>
              <Td>{edificio.cuit}</Td>
              <Td>{edificio.nombreAdministracion}</Td>
              <Td>
                <ActionButtons>
                  <ActionButton 
                    className="edit"
                    onClick={() => handleEdit(edificio)}
                  >
                    ✏️ Editar
                  </ActionButton>
                  <ActionButton 
                    className="delete"
                    onClick={() => handleDelete(edificio.id)}
                  >
                    🗑️ Eliminar
                  </ActionButton>
                </ActionButtons>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdministrarConsorcios; 