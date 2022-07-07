import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
function CampusDetail(props) {
    const { campus } = props;
    const { colleges } = props;
    const { image } = props;
    return (<>
        <img width="100%" src={image} title={`${campus}平面圖`} alt="" />
        <Typography sx={{
            fontSize: "24px",
            fontWeight: "bold",
            fontFamily: "Inter",
        }}>
            {campus}
        </Typography>
        <Stack direction="row" spacing={2} sx={{ overflowX: "auto" }}>
        {
            Object.keys(colleges).map(college => {
                const Departments = () => {
                    return colleges[college].map(department => {
                        return (
                            <Typography>{department}</Typography>
                            // <p className="p">
                            //     <span>{department}</span>
                            // </p>
                        )
                    })
                }
                return (
                    <div className="div28">
                        <Typography sx={{
                            fontWeight: 'bold',
                        }}>{college}</Typography>
                        {/* <p className="p">
                            <b>{college}</b>
                        </p> */}
                        <Departments />
                        <Typography>{"　"}</Typography>
                        {/* <p className="p">
                            <span>{"　"}</span>
                        </p> */}
                    </div>
                )
            })
        }
        </Stack>
    </>)
}
export default CampusDetail;