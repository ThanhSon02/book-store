import { Button, Form, Modal, Space, Spin, Table } from "antd";
import {
    EditOutlined,
    DeleteOutlined,
    AppstoreAddOutlined,
} from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, getAllBook } from "../../../service/bookService";
import AdminCreateBookModal from "../AdminCreateBookModal/AdminCreateBookModal";
import AdminUpdateBookModal from "../AdminUpdateBookModal/AdminUpdateBookModal";

function AdminProduct() {
    const columns = [
        {
            title: "Tên sản phẩm",
            key: "book_name",
            dataIndex: "book_name",
        },
        {
            title: "Thể loại",
            key: "category",
            dataIndex: "category",
        },
        {
            title: "Ảnh",
            key: "book_img",
            dataIndex: "book_img",
            render: (_, record) => (
                <img width={32} height={48} src={record.book_img} />
            ),
        },
        {
            title: "Số lượng",
            key: "in_stock",
            dataIndex: "in_stock",
            render: (_, record) => (
                <span style={{ color: "green", fontWeight: 500 }}>
                    {record.in_stock}
                </span>
            ),
        },
        {
            title: "Giá",
            key: "price",
            dataIndex: "price",
            render: (_, record) => (
                <span style={{ color: "green", fontWeight: 500 }}>
                    {record.price}
                    <span>đ</span>
                </span>
            ),
        },
        {
            title: "Giảm giá",
            key: "discount",
            dataIndex: "discount",
            render: (_, record) => (
                <span style={{ color: "green", fontWeight: 500 }}>
                    {record.discount}
                    <span>%</span>
                </span>
            ),
        },
        {
            title: "Đã bán",
            dataIndex: "selled",
            key: "selled",
            render: (_, record) => (
                <span style={{ color: "crimson", fontWeight: 500 }}>
                    {record.selled}
                </span>
            ),
        },
        {
            title: "Tuỳ chọn",
            key: "option",
            render: () => (
                <Space size="middle">
                    <a className="update-book-btn" onClick={showModalUpdate}>
                        <EditOutlined />
                    </a>
                    <a className="delete-book-btn" onClick={showModalDelete}>
                        <DeleteOutlined />
                    </a>
                </Space>
            ),
        },
    ];

    const dispatch = useDispatch();
    const data = useSelector((state) => state.books.bookList);
    const isLoading = useSelector((state) => state.books.isLoading);
    const currentUser = useSelector((state) => state.auth.auth);
    const accessToken = currentUser.accessToken;

    const [rowSelected, setRowSelected] = useState("");
    const [openDelete, setOpenDelete] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);

    const [form] = Form.useForm();

    const createFormRef = useRef();
    const updateFormRef = useRef();

    useEffect(() => {
        dispatch(getAllBook());
    }, []);

    // Control Modal Delete
    const showModalDelete = () => {
        setOpenDelete(true);
    };

    const hideModalDelete = () => {
        setOpenDelete(false);
    };

    const handleDeleteBook = () => {
        dispatch(deleteBook({ bookID: rowSelected._id, accessToken }));
        hideModalDelete();
    };

    // Control Modal Add
    const showModalAdd = () => {
        setOpenAdd(true);
    };

    const hideModalAdd = () => {
        setOpenAdd(false);
    };

    const handleAddBook = () => {
        createFormRef.current.submit();
        if (!isLoading) {
            hideModalAdd();
        }
    };

    // Control Modal Update
    const showModalUpdate = () => {
        setOpenUpdate(true);
    };

    const hideModalUpdate = () => {
        setOpenUpdate(false);
    };

    const handleUpdateBook = () => {
        updateFormRef.current.submit();
        if (!isLoading) {
            hideModalUpdate();
        }
    };

    const renderCreateProductBtn = () => {
        return (
            <div>
                <h3>Tất cả sản phẩm</h3>
                <Button onClick={showModalAdd}>
                    <AppstoreAddOutlined />
                </Button>
            </div>
        );
    };

    return (
        <>
            <Spin size="large" style={{ width: "100%" }} spinning={isLoading}>
                <Table
                    style={{ width: "100%" }}
                    columns={columns}
                    dataSource={data}
                    title={renderCreateProductBtn}
                    onRow={(record) => {
                        return {
                            onClick: () => {
                                setRowSelected(record);
                            },
                        };
                    }}
                />
            </Spin>
            <Modal
                okText="Xoá"
                cancelText="Huỷ"
                open={openDelete}
                onOk={handleDeleteBook}
                onCancel={hideModalDelete}>
                <h3>Bạn có chắc muốn xoá sản phẩm này?</h3>
            </Modal>
            <Modal
                title="Thêm sản phẩm"
                open={openAdd}
                onCancel={hideModalAdd}
                footer={[
                    <Button key={"cancel"} onClick={hideModalAdd}>
                        Huỷ
                    </Button>,
                    <Button key={"add"} type="primary" onClick={handleAddBook}>
                        Thêm
                    </Button>,
                ]}>
                <AdminCreateBookModal form={form} formRef={createFormRef} />
            </Modal>
            <Modal
                title="Chỉnh sửa sản phẩm"
                open={openUpdate}
                onCancel={hideModalUpdate}
                footer={[
                    <Button key={"cancel"} onClick={hideModalUpdate}>
                        Huỷ
                    </Button>,
                    <Button
                        key={"update"}
                        type="primary"
                        onClick={handleUpdateBook}>
                        Cập nhật
                    </Button>,
                ]}>
                <AdminUpdateBookModal
                    form={form}
                    formRef={updateFormRef}
                    currentData={rowSelected}
                />
            </Modal>
        </>
    );
}

export default AdminProduct;
