import { Divider, Grid } from '@geist-ui/core';
import { useNavigate } from 'react-router-dom';

function MenuItem(props) {
  const navigate = useNavigate();

  return (
    <>
      {props.child != 1 && (
        <Divider
          className="fadein"
          style={{
            width: '100%',
            animationDelay: `${props.child * 50}ms`,
            zIndex: 100,
          }}
        />
      )}
      <Grid
        xs={24}
        direction="row"
        alignItems="center"
        onClick={() => navigate(props.page)}
      >
        <div
          className="menu--item-cell fadein"
          style={{ animationDelay: `${props.child * 50}ms` }}
        >
          {props.icon}
          <p className="menu--item">{props.text}</p>
        </div>
      </Grid>
    </>
  );
}

export default MenuItem;
